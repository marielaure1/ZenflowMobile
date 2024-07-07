import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '@config/supabase';
import { loginRequest, loginSuccess, loginFailure, logout } from '@stores/auth/auth.actions';
import AuthNavigator from '@navigators/auth.navigator';
import MainNavigator from '@navigators/main.navigator';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { useCustomersApi } from '@api/api';
import useFetchData from '@hooks/useFetchData';
import queryClient from '@api/config.react-query';
import Loading from '@/screens/(common)/loading/loading.screen';

export const navigationRef = createNavigationContainerRef();

const AuthProvider = () => {
  const customersApi = useCustomersApi();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [customer, setCustomer] = useState(null);
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const { response, refetch } = useFetchData(() => customersApi.findMe(), ['me']);

  useEffect(() => {
    queryClient.clear();
    const { data: {subscription: authListener} } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        dispatch(loginRequest());

        try {
          const newToken = session.access_token;
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

  useEffect(() => {
    if (isAuthenticated) {
      const handleMe = async () => {
        if (!token) {
          checkSession();
        }

        const result = await refetch();
        console.log("result", result);
        
        if (result?.data) {
          setCustomer(result.data.datas.me);
          dispatch(loginSuccess(token, result.data.datas.me));
        } else {
          setCustomer(null);
          setToken('');
          dispatch(logout());
        }
      };

      handleMe();
    }
  }, [isAuthenticated, refetch, token, dispatch]);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return null;
  }

  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AuthProvider;
