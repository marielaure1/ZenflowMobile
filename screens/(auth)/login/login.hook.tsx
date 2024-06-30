import { useState } from 'react';
import { auth } from '@config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const useLogin = () => {
    const [email, setEmail] = useState('edjour.marielaure@gmail.com');
    const [password, setPassword] = useState('@MIm131609Dev');
    const [error, setError] = useState('');
  
    const handleLogin = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user);
      } catch (err) {
        setError(err.message);
      }
    };

    return { email, setEmail, password, setPassword, error, handleLogin}
}

export default useLogin;