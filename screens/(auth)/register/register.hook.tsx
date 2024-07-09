import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { useAuthApi } from '@api/api';
// import { auth } from '@config/firebase';
// import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { supabase } from '@config/supabase';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const useRegister = () => {
  const customersApi = useAuthApi();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  });

  const validatePasswordConfirm = (value: string) => {
    const { password } = control._formValues;
    return value === password || "Les mots de passe ne correspondent pas";
  };

  const handleRegister = async (datas: FormData) => {
    try {

      
      const { data, error } = await supabase.auth.signUp({ email: datas.email, password: datas.password, options: { data: {...datas}} });
      
      if (error) {
        alert(error.message);
      } else {
        
      }

      // const signIn = await signInWithEmailAndPassword(auth, data.email, data.password);
      // console.log(signIn);
    } catch (error) {
      console.log(error);
    }
  };

  return { control, handleSubmit, handleRegister, errors, validatePasswordConfirm };
};

export default useRegister;

    // const [firstName, setFirstName] = useState('Marie-Laure');
    // const [lastName, setLastName] = useState('Edjour');
    // const [email, setEmail] = useState('edjour.marielaure@gmail.com');
    // const [password, setPassword] = useState('@Test123456');
    // const [passwordConfirm, setPasswordConfirm] = useState('@Test123456');
    // const [error, setError] = useState('');
