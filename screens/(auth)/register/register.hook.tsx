import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { useAuthApi } from '@/api/api';
import { auth } from '@config/firebase';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

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

  const handleRegister = async (data: FormData) => {
    try {
      // Enregistrer l'utilisateur ou faire d'autres opérations nécessaires
      const customers = await customersApi.register(data);
      console.log(customers);

      // Envoyer un e-mail de vérification à l'utilisateur
      // if (auth.currentUser) {
      //   const sendEmail = await sendEmailVerification(customers.datas.auth.firestore);
      //   console.log(sendEmail);
      // }

      // Connexion de l'utilisateur après l'inscription
      const signIn = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log(signIn);
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
