import { useState } from 'react';
import { auth } from '@config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
// import {useCustomersWithQueryClient} from "@api/customers/customers"
import useFetchData from '@hooks/useFetchData';

const useRegister = () => {
    const [firstName, setFirstName] = useState('Marie-Laure');
    const [lastName, setLastName] = useState('Edjour');
    const [email, setEmail] = useState('edjour.marielaure@gmail.com');
    const [password, setPassword] = useState('@Test123456');
    const [passwordConfirm, setPasswordConfirm] = useState('@Test123456');
    const [error, setError] = useState('');

    const navigation = useNavigation();
    // const { createCustomer } = useCustomersWithQueryClient();
  
    const handleRegister = async () => {

      try{
        
        // const customers =  await createCustomer({firstName, lastName, email, password, passwordConfirm});

        // console.log(customers);
        
        const signIn = await signInWithEmailAndPassword(auth, email, password)
        // console.log(signIn);
        
      } catch(error) {
        console.log(error);
        
      }
    };

    return { firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, passwordConfirm, setPasswordConfirm, error, handleRegister, navigation}
}

export default useRegister;