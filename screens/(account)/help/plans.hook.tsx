import { useEffect, useState } from 'react';
import { auth } from '@config/firebase';
import { useNavigation } from '@react-navigation/native';
import { usePlansApi, useSubscriptionsApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import PlansProps from '@interfaces/plans.interface';
import useFetchData from '@/common/hooks/useFetchData';
import { useSelector } from 'react-redux';
import { useStripe } from '@stripe/stripe-react-native';

const usePlans = () => {
    const customer = useSelector((state) => state?.auth?.customer);
    const plansApi = usePlansApi();
    const subscriptionsApi = useSubscriptionsApi();
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    const { response, isLoading, error, refetch } = useFetchData(() => plansApi.findAll(), ["plans"]);

    const navigation = useNavigation();

    const handleChangePlan = async (planId: string) => {
        console.log("customer",customer);
        
        try {
          const subscription = await subscriptionsApi.create({ plan: planId, customer: customer.customer._id});
          console.log(subscription.datas.subscriptions.subscription.stripeCustomerId);

          const response = await fetch('http://192.168.1.80:3001/api/payments/create-checkout-session', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Spécifiez le type de contenu
  },
  body: JSON.stringify({
    amount: 2000,
    currency: 'EUR',
    customerId: subscription.datas.subscriptions.subscription.stripeCustomerId,
  }),
});


          const jsonData = await response.json()

          console.log(jsonData);
          
          

          const { error } = await initPaymentSheet({
            merchantDisplayName: "Example, Inc.",
            customerId: jsonData.datas.payment.customer,
            customerEphemeralKeySecret: jsonData.datas.payment.ephemeralKey,
            paymentIntentClientSecret: jsonData.datas.payment.paymentIntent,
            // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
            //methods that complete payment after a delay, like SEPA Debit and Sofort.
            allowsDelayedPaymentMethods: true,
            defaultBillingDetails: {
              name: 'Jane Doe',
            }
          });

          console.log(error);
          

          
        } catch (error) {
          console.log(error);
        }
    }

    const openPaymentSheet = async () => {
      const { error } = await presentPaymentSheet();
  
      if (error) {
        console.log(`Error code: ${error.code}`, error.message);
      } else {
        console.log('Success', 'Your order is confirmed!');
      }
    };

  return { navigation, response, error, isLoading, handleChangePlan, refetch , openPaymentSheet};
};

export default usePlans;