import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@config/firebase';
import { signOut } from 'firebase/auth';
import { loginRequest, loginSuccess, loginFailure, logout } from '@stores/auth/auth.actions';
import AuthNavigator from '@navigators/auth.navigator';
import MainNavigator from '@navigators/main.navigator';
import { createNavigationContainerRef } from '@react-navigation/native';
import { useCustomersApi } from '@api/api';
import useFetchData from '@hooks/useFetchData';
import queryClient from '@/api/config.react-query';

export const navigationRef = createNavigationContainerRef();

const AuthProvider = () => {
  const customersApi = useCustomersApi();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [tokenValid, setTokenValid] = useState(false);
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const { refetch } = useFetchData(() => customersApi.findMe(), ["me"]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(loginRequest());

        try {
          const newToken = await user.getIdToken(true);
          setToken(newToken);

          dispatch(loginSuccess(newToken, {}));

          handleMe(newToken);
        } catch (err) {
          dispatch(loginFailure(err.message));
        }
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      handleMe(token);
    }
  }, [isAuthenticated, token]);

  const handleMe = async (currentToken) => {
    queryClient.invalidateQueries({ queryKey: ["me"] });

    try {
      const result = await refetch();

      if (result.error || result.data.statusCode === 401) {
        setTokenValid(false);
        signOut(auth);
        dispatch(logout());
      } else {
        setTokenValid(true);
        dispatch(loginSuccess(currentToken, result.data.datas.me));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  return isAuthenticated && tokenValid ? <MainNavigator /> : <AuthNavigator />;
};

export default AuthProvider;
