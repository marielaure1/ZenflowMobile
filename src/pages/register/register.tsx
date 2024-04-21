import React, { useState, useRef }  from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  TextInput,
  View,
  ImageBackground,
  Text,
  StyleSheet
} from 'react-native';

import ButtonPrimary from "@components/buttons/buttonPrimary";
import ButtonSecondary from "@components/buttons/buttonSecondary";
import useRegister from "@pages/register/register.hook";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BackgroundImageAuth from "@assets/images/background-auth.jpg";
import styles from "@pages/register/register.styles";
import buttons from '@theme/theme.buttons';
import texts from '@theme/theme.texts';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

interface RegisterProps {
  navigation: RegisterScreenNavigationProp;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
    let { 
		register, 
		setRegister, 
		password, 
		setPassword, 
		backgroundStyle, 
		handleSignUp, 
		isDarkMode, 
		handleOTP, 
		otp, 
		setOtp, 
		message, 
		next,
		handleInputOtpChange,
		otpInputs,
		otpRefs,
		otpSplit,
		handleOTPResend
	} = useRegister();

  return (
    <SafeAreaView style={backgroundStyle}>
		<StatusBar
			barStyle={isDarkMode ? 'light-content' : 'dark-content'}
			backgroundColor={backgroundStyle.backgroundColor}
		/>
		<ScrollView contentInsetAdjustmentBehavior="automatic" >
			<ImageBackground source={BackgroundImageAuth} resizeMode="cover" style={styles.image}>
		
			{!next && (
				<View style={styles.container}>
					<Text style={styles.text}>{message}</Text>
					<TextInput 
					placeholder={"Email"}
                    placeholderTextColor="#000" 
					value={register} 
					onChangeText={(content) => setRegister(content)}
					style={[styles.inputField]}
					/>
					<TextInput 
					placeholder={"Mot de passe"}
                    placeholderTextColor="#000" 
					secureTextEntry={true}
					value={password} 
					onChangeText={(content) => setPassword(content)}
					style={[styles.inputField]}
					/>
					<TextInput 
					placeholder={"Mot de passe"}
                    placeholderTextColor="#000" 
					secureTextEntry={true}
					value={password} 
					onChangeText={(content) => setPassword(content)}
					style={[styles.inputField]}
					/>

                    <ButtonPrimary navigation={navigation} styleBg={[styles.marginBottom, buttons.buttonBgBlack]} action={() => handleSignUp()} text="S'inscrire"/>
                    <ButtonSecondary navigation={navigation} styleTxt={[styles.marginBottom, texts.textPrimary]}  action={navigation.goBack} text="Retour"/>
				</View>
			)}

			{next && (
				<View style={styles.container}>
				    <Text style={styles.text}>{message}</Text>

					<View style={styles.containerOtp}>


					{otpInputs.map((_, index) => (
						<TextInput
						key={index}
						ref={ref => (otpRefs.current[index] = ref)}
						style={styles.inputOtp}
						maxLength={1}
						keyboardType="numeric"
						value={otpSplit[index]}
						onChangeText={text => handleInputOtpChange(index, text)}
						placeholder='0'
						/>
					 ))}
					</View>

					<Text style={styles.text}>Un code de vérification vous à été envoyé par mail.</Text>
                    <ButtonSecondary navigation={navigation} styleTxt={[styles.marginBottom, texts.textPrimary]}  action={handleOTPResend} text="Renvoyer le code ?"/>

					<ButtonPrimary navigation={navigation} styleBg={[styles.marginBottom, buttons.buttonBgBlack]} action={handleOTP} text="Valider l'OTP"/>
                    <ButtonSecondary navigation={navigation} styleTxt={[styles.marginBottom, texts.textPrimary]}  action={navigation.goBack} text="Retour"/>
				</View>
		    )}
			</ImageBackground>
		</ScrollView>
    </SafeAreaView>
   );
}

export default Register;