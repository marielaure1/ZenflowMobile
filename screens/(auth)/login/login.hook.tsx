import { useState } from 'react';
// import { auth } from '@config/firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { supabase } from '@config/supabase';

const useLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
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