import { useState } from 'react';
import { auth } from '@config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const useLogin = () => {
    const [email, setEmail] = useState('edjour.marielaure@gmail.com');
    const [password, setPassword] = useState('@Test123456');
    const [error, setError] = useState('');
  
    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Successfully registered
          console.log("Successfully registered");
          
        })
        .catch(err => {
          setError(err.message);
        });
    };

    return { email, setEmail, password, setPassword, error, handleLogin}
}

export default useLogin;