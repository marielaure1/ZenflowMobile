import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@config/firebase';
import { login, logout } from '@stores/auth/auth.actions';
import AuthNavigator from '@navigators/auth.navigator';
import MainNavigator from '@navigators/main.navigator';
import { createNavigationContainerRef } from '@react-navigation/native';
import { useCustomersApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import useFetchData from '../hooks/useFetchData';

export const navigationRef = createNavigationContainerRef();

const AuthProvider = () => {
  const customersApi = useCustomersApi();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const state = useSelector((state) => state.auth);
  const { response, isLoading: isLoadingMe, error: fetchError, refetch } = useFetchData(() => customersApi.findMe(), ["me"]);
 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        
        const token = user?.stsTokenManager?.accessToken;
        const { data } = await refetch();

        if (data) {
          dispatch(login(token, data?.datas?.me));
        } else {
          auth.signOut()
          dispatch(logout());
        }
      } else {
        console.log(user);
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch, refetch, response]);

  useEffect(() => {
    if (response?.message === "Invalid token") {
      dispatch(logout());
    }
    
  }, [response, dispatch]);

  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AuthProvider;
