import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@config/firebase';
import { signOut } from 'firebase/auth';
import { loginRequest, loginSuccess, loginFailure, logout } from '@stores/auth/auth.actions';
import AuthNavigator from '@navigators/auth.navigator';
import MainNavigator from '@navigators/main.navigator';
import { createNavigationContainerRef } from '@react-navigation/native';
import { useCustomersApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import useFetchData from '@hooks/useFetchData';
import queryClient from '@/api/config.react-query';

export const navigationRef = createNavigationContainerRef();

const AuthProvider = () => {
  const customersApi = useCustomersApi();
  const dispatch = useDispatch();
  const [ token, setToken ] = useState("");
  const [ tokenValid, setTokenValid ] = useState(false);
  const { isAuthenticated, type,  token: tk, loading, error } = useSelector((state) => state.auth);
  const { response, refetch } = useFetchData(() => customersApi.findMe(), ["me"]);

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      // console.log(user.stsTokenManager.accessToken);
      if (user) {
        dispatch(loginRequest());

        try {
          const newToken = await user.getIdToken(true);
          setToken(newToken);

          dispatch(loginSuccess(token, {}));
          handleMe()
      
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
    handleMe()
  }, [isAuthenticated])
  

  const handleMe = async () => {
    queryClient.invalidateQueries({ queryKey: ["me"] });
   try {
    const result = await refetch();
    if (result.error) {
      setTokenValid(false)
      signOut(auth)
      dispatch(logout());
      throw new Error(result.error.message);
    }
    
    setTokenValid(true)
    dispatch(loginSuccess(token, result.data.datas.me));
   } catch (error) {
    console.log(error);
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
