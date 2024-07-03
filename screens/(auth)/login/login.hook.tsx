import { useState } from 'react';
// import { auth } from '@config/firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { supabase } from '@config/supabase';

const useLogin = () => {
    const [email, setEmail] = useState('edjour.marielaure@gmail.com');
    const [password, setPassword] = useState('@Test123456');
    const [error, setError] = useState('');
  
    const handleLogin = async () => {
      const { user, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        alert(error.message);
      } 
    };

    return { email, setEmail, password, setPassword, error, handleLogin}
}

export default useLogin;