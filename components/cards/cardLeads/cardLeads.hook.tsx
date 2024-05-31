// import React, {useContext} from 'react';
import texts from '@/theme/theme.texts';
// import ButtonSecondary from "@components/buttons/buttonSecondary";
// import {Amplify, Auth} from 'aws-amplify';
// import amplifyconfig from '@/amplifyconfiguration.js';
// import { AuthContext } from "@/App";
// import styles from "@pages/register/register.styles";
// Amplify.configure(amplifyconfig);

export default function useHeader() {
    // const { setIsAuthenticated } = useContext(AuthContext);

    const handleSignOut = async () => {
        try{
    
          // const result = await Auth.signOut();
    
          // setIsAuthenticated(false)
          
        } catch(error){
          console.log('error', error);
          
        }
    }
    return {handleSignOut}
};

