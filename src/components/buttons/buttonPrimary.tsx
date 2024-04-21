import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import buttons from '@theme/theme.buttons';
import { StyleProp } from 'react-native';
import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types';

interface ButtonPrimaryProps {
    navigation?: any; 
    link?: string;
    text: string;
    action?: Callback;
    styleBg?: StyleProp<ViewStyle>;
    styleTxt?: StyleProp<ViewStyle>;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ navigation, link, text, styleBg, styleTxt, action}) => {
    const changeView = (url: string) => {
        navigation?.navigate(url);
    };

    return (
        <Pressable style={[buttons.button, styleBg]} onPress={() => link ? changeView(link) : action()}>
            <Text style={[buttons.buttonClBlack, buttons.buttonText, styleTxt]}>{text}</Text>
        </Pressable>
    );
};

export default ButtonPrimary;
