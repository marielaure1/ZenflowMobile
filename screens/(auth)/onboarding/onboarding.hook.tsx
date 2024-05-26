import { useState } from 'react';
import { auth } from '@config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useOnboarding = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleOnboarding = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Successfully registered
        })
        .catch(err => {
          setError(err.message);
        });
    };

    return { email, setEmail, password, setPassword, error, handleOnboarding}
}

export default useOnboarding;