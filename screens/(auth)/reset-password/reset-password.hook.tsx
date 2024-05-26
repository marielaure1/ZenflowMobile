import { useState } from 'react';
import { auth } from '@config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleResetPassword = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Successfully registered
        })
        .catch(err => {
          setError(err.message);
        });
    };

    return { email, setEmail, password, setPassword, error, handleResetPassword}
}

export default useResetPassword;