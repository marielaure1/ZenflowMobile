import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetchData from '@/common/hooks/useFetchData';
import { useCustomersApi } from '@api/api';
import { useForm } from 'react-hook-form';

type FormProfilData = {
  firstName: string;
  lastName: string;
};

type FormEmailData = {
  email: string;
};

type FormPasswordData = {
  password: string;
  passwordConfirm: string;
};

const useGeneral = () => {
  const customersApi = useCustomersApi();
  const me = useSelector((state) => state.auth.customer);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      text: "Informations personnelles",
      foreground: "#35BFFF",
      background: "#CEF0FF",
    },
    {
      id: 2,
      text: "Email",
      foreground: "#35BFFF",
      background: "#CEF0FF",
    },
    {
      id: 3,
      text: "Mot de passe",
      foreground: "#35BFFF",
      background: "#CEF0FF",
    },
  ]);
  const [currentTab, setCurrentTab] = useState(1);

  const {
    control: controlProfil,
    handleSubmit: handleSubmitProfil,
    formState: { errors: errorsProfil }
  } = useForm<FormProfilData>({
    defaultValues: {
      firstName: me ? me?.customer.firstName : "",
      lastName: me ? me?.customer.lastName : ""
    }
  });

  const {
    control: controlEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail }
  } = useForm<FormEmailData>({
    defaultValues: {
      email: me ? me?.user.email : ""
    }
  });

  const {
    control: controlPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword }
  } = useForm<FormPasswordData>({
    defaultValues: {
      password: '',
      passwordConfirm: ''
    }
  });

  const validatePasswordConfirm = (value: string) => {
    const { password } = controlPassword._formValues;
    return value === password || "Les mots de passe ne correspondent pas";
  };

  const handleUpdateProfil = async (data) => {
    try{
      const updatedProfilClient = await customersApi.update(me?.customer._id, data);
      // navigation.goBack();
      
    } catch(error){
      console.log(error);
      
    }
  };

  const handleUpdateEmail = async (data) => {
    
    try{
      const updatedEmailClient = await customersApi.updateMeEmail(data.email);
      // navigation.goBack();
      
    } catch(error){
      console.log(error);
      
    }
  };

  const handleUpdatePassword = async (data) => {
    
    try{
      const updatedPasswordClient = await customersApi.updateMePassword(data);
    } catch(error){
      console.log(error);
      
    }
  };

  
  return { 
    me, 
    controlProfil, 
    handleSubmitProfil, 
    errorsProfil,
    controlPassword,
    handleSubmitPassword,
    errorsPassword,
    validatePasswordConfirm,
    controlEmail, 
    handleSubmitEmail, 
    errorsEmail,
    handleUpdateProfil,
    handleUpdatePassword,
    handleUpdateEmail,
    currentTab, 
    setCurrentTab,
    tabs, 
    setTabs
  };
};

export default useGeneral;
