// auth-provider.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@config/firebase'; // Assurez-vous que ce chemin est correct et que vous exportez auth correctement
import { login, logout } from '@stores/auth/auth.actions'; // Chemin correct pour les actions
import AuthedTabs from '@components/tabs/authed-tabs';
import NotAuthedTabs from '@components/tabs/not-authed-tabs';

const AuthProvider = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login());
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (!isAuthenticated) {
    return <NotAuthedTabs />;
  }

  return <AuthedTabs />;
};

export default AuthProvider;
