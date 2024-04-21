import { useContext, useState, useRef, createRef} from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useColorScheme } from 'react-native';
// import {Amplify, Auth} from 'aws-amplify';
// import amplifyconfig from '@/amplifyconfiguration.js';
import { AuthContext } from "@/App";
// Amplify.configure(amplifyconfig);

export default function useRegister() {
    const { setIsAuthenticated } = useContext(AuthContext);
    const isDarkMode = useColorScheme() === 'dark';
    const [register, setRegister] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState();
    const [message, setMessage] = useState<string>();
    const [next, setNext] = useState(false);
    const [otpSplit, setOTPSplit] = useState(['', '', '', '', '', '']);
    const otpInputs = Array(6).fill(0);
    const otpRefs = useRef(otpInputs.map(() => createRef()));
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
      
    const handleSignUp = async () => {
        
        try{
            const signUpInfo = {
                username: register, 
                password: password,
                attributes: {},
                autoSignIn: { enable: false}
            }
    
            // const response = await Auth.signUp(signUpInfo);

            setNext(true)

        } catch(error){
            console.log("Erreur > Register > ", error); 
            if(error instanceof TypeError && error.message.includes('cyclical structure in JSON object')){
                setMessage("Veuillez saisir un identifiant et un mot de passe correct.");
                
            } else if(error.message.includes('An account with the given email already exists.')){
                setNext(true)
                handleOTPResend()
                setMessage("Ce compte existe déjà");
            }else {
                setMessage("Une erreur s'est produite");
            }

            
            
        }
    }

    const handleOTP = async () => {
        try{
            
            setOtp(otpSplit.join(''))
            
            // const confirmation = await Auth.confirmSignUp(
            //     register, otpSplit.join('')
            // );

            setIsAuthenticated(true)
        } catch(error){
            console.log('error', error);

            if(error.message.includes('Invalid verification code provided, please try again.')){
                setMessage("Code incorrecte");
            } 
        }
    }

    const handleInputOtpChange = (index, value) => {
        if (value.length === 1 && index < 5) {
            otpRefs.current[index + 1].focus();
        }
        const newOTP = [...otpSplit];
        newOTP[index] = value;
        setOTPSplit(newOTP);
    };

    const handleOTPResend = async () => {
        console.log(password);
        
        try{
            // const resendSignUp = await Auth.resendSignUp( register );
        } catch(error){
            console.log('Erreur > OTP > Resend > ', error);
        }
    }

    return { register, setRegister, password, setPassword, backgroundStyle, handleSignUp, isDarkMode, handleOTP, otp, setOtp, message, next, handleInputOtpChange, otpInputs, otpRefs, otpSplit, handleOTPResend }
}