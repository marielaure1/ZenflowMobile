import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useStripe } from '@stripe/stripe-react-native';
import { usePlansApi, useSubscriptionsApi, usePaymentsApi } from '@api/api';
import useFetchData from '@/common/hooks/useFetchData';
import { supabase } from '@/config/supabase';
import { logout } from '@/stores/auth/auth.actions';
import queryClient from '@/api/config.react-query';

const usePlans = () => {
  const dispatch = useDispatch()
  const customer = useSelector((state) => state?.auth?.customer);
  
  const plansApi = usePlansApi();
  const paymentsApi = usePaymentsApi();
  const subscriptionsApi = useSubscriptionsApi();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [subscriptionState, setSubscriptionState] = useState("choose");
  const [myPlan, setMyPlan] = useState();
  const [plans, setPlans] = useState([]);
  const [ errorPlan, setErrorPlan ] = useState({type: "", message: ""});

  const { response, isLoading, error, refetch } = useFetchData(() => plansApi.findAll(), ["plans"]);
  const { response: responseSubscriptions, isLoading: isLoadingSubscriptions, error: fetchSubscriptions, refetch: refetchMySubscription } = useFetchData(() => subscriptionsApi.findMySubscription(), ["subscriptions"]);
  const navigation = useNavigation();

  console.log("custo", customer?.customer?._id);
  
  useEffect(() => {
    if (response) {
      if(!response?.datas?.plans && response?.code == 404){
        setErrorPlan({type: "Error", message: "Une erreur c'est produite"})
        setPlans([])
       
      } else {
        setPlans(response?.datas?.plans)
        
        if(responseSubscriptions?.datas?.subscriptions){

          const plan = response?.plans?.find(plan => plan?._id === responseSubscriptions?.datas?.subscriptions?.plan);
 
          if (plan) {
            setMyPlan(plan);
            setSubscriptionState("subscribed");
          }
        }
        
      }
    }
  }, [response, responseSubscriptions]);

  const handleChangePlan = async (planId) => {
    if (subscriptionState !== 'choose') return;
    setSubscriptionState("pending");

    
    try {

      let subscriptionResponse = await subscriptionsApi.createSubscription({
        plan: planId,
        customer: customer?.customer?._id
      });

      console.log("Subscription created:", subscriptionResponse);

      // // Ensure the subscription is created before refetching
      // if (subscriptionResponse?.datas?.subscriptions) {
      //   const my = await refetchMySubscription();
      //   console.log("Fetched subscription after creation:", my?.data?.datas?.subscriptions);
      // }

      

      // const sessionData = await paymentsApi.createCheckoutSession({
      //   amount: subscription.datas.subscriptions.stripeSubscription.items.data[0].plan.amount,
      //   currency: subscription.datas.subscriptions.stripeSubscription.items.data[0].plan.currency,
      //   customerId: subscription.datas.subscriptions.subscription.stripeCustomerId
      // });

      // await initAndPresentPaymentSheet(sessionData.datas.payment);
    } catch (error) {
      console.error("Error handling change plan: ", error);
      setSubscriptionState("choose");
    }
  };

  const initAndPresentPaymentSheet = async (paymentData) => {
    try {
      const { error: initError } = await initPaymentSheet({
        merchantDisplayName: "Example, Inc.",
        customerId: paymentData.customer,
        customerEphemeralKeySecret: paymentData.ephemeralKey,
        paymentIntentClientSecret: paymentData.paymentIntent,
        allowsDelayedPaymentMethods: true,
        defaultBillingDetails: {
          name: 'Jane Doe',
        }
      });

      if (initError) throw initError;

      const { error: sheetError } = await presentPaymentSheet();

      if (sheetError) {
        console.log(`Error code: ${sheetError.code}`, sheetError.message);
        setSubscriptionState("payment-error");
      } else {
        setSubscriptionState("subscribed");
      }
    } catch (error) {
      console.error("Payment sheet failed: ", error);
      setSubscriptionState("payment-failed");
    }
  };

  const handleCancelPlan = async () => {
    try {
      await subscriptionsApi.cancelSubscription(myPlan?._id);
      setSubscriptionState("choose");
    } catch (error) {
      console.error("Error cancelling plan: ", error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(logout());
  };

  return {
    handleLogout,
    myPlan,
    subscriptionState,
    responseSubscriptions,
    navigation,
    response,
    error,
    isLoading,
    handleChangePlan,
    handleCancelPlan,
    refetch,
    errorPlan,
    plans
  };
};

export default usePlans;
