import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native';
import { auth } from '@config/firebase';
import { loginSuccess, loginFailure, logout } from '@stores/auth/auth.actions';
import AuthNavigator from '@navigators/auth.navigator';
import MainNavigator from '@navigators/main.navigator';
import { createNavigationContainerRef } from '@react-navigation/native';
import queryClient from '@/api/config.react-query';
import useFetchData from '../hooks/useFetchData';
import { signOut } from 'firebase/auth';

export const navigationRef = createNavigationContainerRef();

const AuthProvider = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error, token } = useSelector((state) => state.auth);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const token = await user.getIdToken(true);
          dispatch(loginSuccess(token));
        } else {
          dispatch(logout());
        }
      } catch (err) {
        dispatch(logout());
        dispatch(loginFailure(err.message));
      }
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    try {
      if (error) {
        console.error('Auth error:', error);
        dispatch(logout());
      }
    } catch (err) {
      console.error('Error handling auth error:', err);
    }
  }, [error, dispatch]);

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>Erreur</Text>;
  }

  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AuthProvider;
