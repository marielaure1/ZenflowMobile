import React from 'react';
import { TouchableOpacity, Pressable, StyleSheet, Text, ViewStyle, Image } from 'react-native';
import buttons from '@theme/theme.buttons';
import { StyleProp } from 'react-native';
import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types';
import { useNavigation } from '@react-navigation/native';

interface ButtonPrimaryProps {
    navigation?: any; 
    link?: string;
    text: string;
    action?: Callback;
    size?: string;
    type: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ link, text, action, type, size, icon}) => {
console.log(link);

    const navigation = useNavigation();

    const changeView = (url: string) => {
        console.log(url);
        console.log(navigation?.navigate(url));
        
        
        navigation?.navigate(url);
    };

    const typeList = {
        primary: {
            bg: buttons.buttonPrimary,
            txt: buttons.buttonPrimaryText
        },
        secondary: {
            bg: buttons.buttonSecondary,
            txt: buttons.buttonSecondaryText
        }
    }

    

    return (
        <TouchableOpacity style={[buttons.button, typeList[type]["bg"]]} onPress={() => link ? changeView(link) : action()}>
            {icon && <Image source={icon} style={buttons.icon} />}
            <Text style={[buttons.buttonText, typeList[type]["txt"]]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default ButtonPrimary;
