import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '@config/supabase';
import { loginRequest, loginSuccess, loginFailure, logout } from '@stores/auth/auth.actions';
import AuthNavigator from '@navigators/auth.navigator';
import MainNavigator from '@navigators/main.navigator';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { useCustomersApi, useSubscriptionsApi } from '@api/api';
import useFetchData from '@hooks/useFetchData';
import queryClient from '@api/config.react-query';
import Loading from '@/screens/(common)/loading/loading.screen';
import PlansNavigator from '@/navigators/plans.navigator';

export const navigationRef = createNavigationContainerRef();

const AuthProvider = () => {
  const customersApi = useCustomersApi();
  const subscriptionsApi = useSubscriptionsApi();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [customer, setCustomer] = useState(null);
  const [mySubscription, setMySubscription] = useState(null);
  const { isAuthenticated, loading, error, hasSubscription} = useSelector((state) => state.auth);
  const { response, refetch } = useFetchData(() => customersApi.findMe(), ['me']);
  const { response: responseSubscriptions, refetch: refetchSubscriptions } = useFetchData(() => subscriptionsApi.findMySubscription(), ["subscriptions"]);

  useEffect(() => {
    queryClient.clear();
    const { data: {subscription: authListener} } = supabase.auth.onAuthStateChange(async (event, session) => {
      
      
      if (session) {
        dispatch(loginRequest());

        try {
          const newToken = session.access_token;
          
          console.log(session?.access_token);
          setToken(newToken);
          dispatch(loginSuccess(newToken));

          const refreshTokenInterval = setInterval(async () => {
            const { error, data } = await supabase.auth.refreshSession();
            if (error) {
              console.error('Error refreshing token', error);
              dispatch(logout());
            } else {
              setToken(data?.session?.access_token);
              dispatch(loginSuccess(data?.session?.access_token));
            }
          }, (session.expires_in - 60) * 1000);

          return () => clearInterval(refreshTokenInterval);
        } catch (err) {
          dispatch(loginFailure(err.message));
        }
      } else {
        dispatch(logout());
      }
    });

    return () => {
      if (authListener) authListener.unsubscribe();
    };
  }, [dispatch]);

  
  const checkSession = async () => {
    const { data } = await supabase.auth.getSession();

    if (data?.session) {
      const newToken = data?.session?.access_token;
      setToken(newToken);
      dispatch(loginSuccess(newToken));
    } else {
      dispatch(logout());
    }
  };
  
  const handleMe = async () => {
    if (!token) {
      checkSession();
    }

    const result = await refetch();
    
    if (result?.data) {
      setCustomer(result.data.datas.me);
      dispatch(loginSuccess(token, result.data.datas.me));
      handleMySubscription();
    } else {
      setCustomer(null);
      setToken('');
      dispatch(logout());
    }
  };

  const handleMySubscription = async () => {
    if (!token) {
      checkSession();
    }

    const result = await refetchSubscriptions();

    console.log("result", result);
    
    if(result?.data?.code == 404){
      dispatch(loginSuccess(token, customer ?? undefined, true));
    } else {
      dispatch(loginSuccess(token, customer ?? undefined, true));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      

      handleMe();
      
    }
  }, [isAuthenticated, refetch, token, dispatch]);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <Loading/>;
  }

  return isAuthenticated ? (hasSubscription ? <MainNavigator /> : <PlansNavigator />) : <AuthNavigator />;
};

export default AuthProvider;
