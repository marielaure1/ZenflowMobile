import React from 'react';
import { TouchableOpacity, Pressable, StyleSheet, Text, ViewStyle, Image } from 'react-native';
import buttons from '@theme/theme.buttons';
import { StyleProp } from 'react-native';
import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types';
import { useNavigation } from '@react-navigation/native';

type CallbackType = (e?: React.BaseSyntheticEvent) => void | Promise<void>;

interface ButtonPrimaryProps {
    navigation?: any; 
    link?: string;
    linkParams?: object;
    text: string;
    action?: CallbackType;
    size?: string;
    type: string;
    disabled?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ disabled = false, link, text, action, type, size, icon, linkParams = {}}) => {

    const navigation = useNavigation();

    const changeView = (url: string) => {
        navigation?.navigate(url, linkParams);
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
        },
        red: {
            bg: buttons.buttonRed,
            txt: buttons.buttonRedText
        },
    }

    

    return (
        <TouchableOpacity style={[buttons.button, typeList[type]["bg"]]} onPress={() => link ? changeView(link) : (action ? action() : null)} disabled={disabled}>
            {icon && <Image source={icon} style={buttons.icon} />}
            <Text style={[buttons.buttonText, typeList[type]["txt"]]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default ButtonPrimary;
