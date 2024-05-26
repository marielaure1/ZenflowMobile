import { useState } from 'react';
import { auth } from '@config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleForgetPassword = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Successfully registered
        })
        .catch(err => {
          setError(err.message);
        });
    };

    return { email, setEmail, password, setPassword, error, handleForgetPassword}
}

export default useForgetPassword;