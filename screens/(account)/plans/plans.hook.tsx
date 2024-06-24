import { useEffect, useState } from 'react';
import { auth } from '@config/firebase';
import { useNavigation } from '@react-navigation/native';
import { usePlansApi, useSubscriptionsApi, usePaymentsApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import PlansProps from '@interfaces/plans.interface';
import useFetchData from '@/common/hooks/useFetchData';
import { useSelector } from 'react-redux';
import { useStripe } from '@stripe/stripe-react-native';

const usePlans = () => {
    const customer = useSelector((state) => state?.auth?.customer);
    const plansApi = usePlansApi();
    const paymentsApi = usePaymentsApi();
    const subscriptionsApi = useSubscriptionsApi();
    const [subscriptionState, setSubscriptionState] = useState("choose")
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    const { response, isLoading, error, refetch } = useFetchData(() => plansApi.findAll(), ["plans"]);

    const navigation = useNavigation();
    console.log(response?.datas.plans);
    const handleChangePlan = async (planId: string) => {
      setSubscriptionState("pending")

        
        try {
          const subscription = await subscriptionsApi.create({ plan: planId, customer: customer.customer._id});

          const createCheckoutSession = await paymentsApi.createCheckoutSession({ 
            amount: subscription.datas.subscriptions.stripeSubscription.items.data[0].plan.amount, 
            currency: subscription.datas.subscriptions.stripeSubscription.items.data[0].plan.currency, 
            customerId: subscription.datas.subscriptions.subscription.stripeCustomerId
          });

          const { error } = await initPaymentSheet({
            merchantDisplayName: "Example, Inc.",
            customerId: createCheckoutSession.datas.payment.customer,
            customerEphemeralKeySecret: createCheckoutSession.datas.payment.ephemeralKey,
            paymentIntentClientSecret: createCheckoutSession.datas.payment.paymentIntent,
            allowsDelayedPaymentMethods: true,
            defaultBillingDetails: {
              name: 'Jane Doe',
            }
          });

          await openPaymentSheet();
          
        } catch (error) {
          console.log(error);
          setSubscriptionState("choose")
        }
    }

    const openPaymentSheet = async () => {
      const { error } = await presentPaymentSheet();
  
      if (error) {
        console.log(`Error code: ${error.code}`, error.message);
        setSubscriptionState("choose")
      } else {
        setSubscriptionState("subscribed")
      }
    };

  return { subscriptionState, navigation, response, error, isLoading, handleChangePlan, refetch , openPaymentSheet};
};

export default usePlans;