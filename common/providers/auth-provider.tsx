// @components/providers/AuthProvider.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@config/firebase';
import { login, logout } from '@stores/auth/auth.actions';
import AuthNavigator from '@navigators/auth.navigator';
import MainNavigator from '@navigators/main.navigator';
import { createNavigationContainerRef } from '@react-navigation/native';
import { useCustomersApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';

export const navigationRef = createNavigationContainerRef();

const AuthProvider = () => {
  const customersApi = useCustomersApi();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const fetchMe = async () => {
    return customersApi.findMe();
  };

  const { data: response, isLoading: isLoadingMe, error: fetchError, refetch } = useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    enabled: false
});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      
      if (user) {
        const token = user?.stsTokenManager?.accessToken;
        dispatch(login(token));

        const { data } = await refetch();
        if (data) {
          dispatch(login(token, data?.datas?.me));
        }
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch, refetch]);

  console.log("auth: ", isAuthenticated);

  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AuthProvider;
