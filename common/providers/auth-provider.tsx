import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@config/firebase';
import { loginRequest, loginSuccess, loginFailure, logout } from '@stores/auth/auth.actions';
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
  const [ token, setToken ] = useState("");
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const { response, refetch } = useFetchData(() => customersApi.findMe(), ["me"]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {

      if (user) {
        dispatch(loginRequest());

        try {
          const token = await user.getIdToken();
          setToken(token);
          dispatch(loginSuccess(token));
      
        } catch (err) {
          dispatch(loginFailure(err.message));
        }
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);


  useEffect( () => {
    if(isAuthenticated){
      
      let result = handleMe();

      if(result){
        dispatch(loginSuccess(token, result?.datas?.me));
      } else {
        dispatch(logout());
      }
      
    }
  }, [isAuthenticated])

  const handleMe = async () => {
    return await refetch()
  }


  if (loading) {
    return null; 
  }

  if (error) {
    return null; 
  }

  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AuthProvider;
