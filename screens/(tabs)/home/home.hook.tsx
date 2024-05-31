import { useState } from 'react';
import { auth } from '@config/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const token = useSelector((state) => state.auth.token);
  
    
    const handleLogout = () => {
      signOut(auth)
        .then(() => {
          // Successfully registered
          console.log("Successfully registered");
          
        })
        .catch(err => {
          setError(err.message);
        });
    };

    return { email, setEmail, password, setPassword, error, handleLogout}
}

export default useLogin;