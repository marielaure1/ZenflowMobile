import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '@config/supabase';
import { loginRequest, loginSuccess, loginFailure, logout } from '@stores/auth/auth.actions';
import AuthNavigator from '@navigators/auth.navigator';
import MainNavigator from '@navigators/main.navigator';
import { createNavigationContainerRef } from '@react-navigation/native';
import { useCustomersApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import useFetchData from '@hooks/useFetchData';
import queryClient from '@api/config.react-query';

export const navigationRef = createNavigationContainerRef();

const AuthProvider = () => {
  const customersApi = useCustomersApi();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const { response, refetch } = useFetchData(() => customersApi.findMe(), ['me']);

  useEffect(() => {
    queryClient.clear();
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
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
      data.subscription.unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      const handleMe = async () => {
        const result = await refetch();
        if (result) {
          dispatch(loginSuccess(token, result?.data?.datas?.me));
        } else {
          dispatch(logout());
        }
      };

      handleMe();
    }
  }, [isAuthenticated]);

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AuthProvider;
