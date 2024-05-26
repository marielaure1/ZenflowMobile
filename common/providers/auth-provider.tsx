// @components/providers/AuthProvider.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@config/firebase';
import { login, logout } from '@stores/auth/auth.actions';
import AuthNavigator from '@navigators/auth.navigator';
import MainNavigator from '@navigators/main.navigator';
import { useNavigation, StackActions, createNavigationContainerRef  } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const AuthProvider = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login(user.stsTokenManager.accessToken));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  console.log("auth: ",isAuthenticated);
  

  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AuthProvider;
