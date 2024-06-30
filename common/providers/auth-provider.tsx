import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native';
import { auth } from '@config/firebase';
import { signOut } from 'firebase/auth';
import { loginRequest, loginSuccess, loginFailure, logout } from '@stores/auth/auth.actions';
import AuthNavigator from '@navigators/auth.navigator';
import MainNavigator from '@navigators/main.navigator';
import { createNavigationContainerRef } from '@react-navigation/native';
import queryClient from '@/api/config.react-query';

export const navigationRef = createNavigationContainerRef();

const AuthProvider = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        queryClient.clear()
        user.getIdToken(true).then((token) => {
          dispatch(loginSuccess(token));
        });
      } else {
        dispatch(logout());
      }
    });
  
    return unsubscribe;
  }, []);
  

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>Erreur</Text>;
  }

  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AuthProvider;
