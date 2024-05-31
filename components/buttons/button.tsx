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

    const navigation = useNavigation();

    const changeView = (url: string) => {
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
        },
        blue: {
            bg: buttons.buttonBlue,
            txt: buttons.buttonBlueText
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
