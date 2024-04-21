import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import buttons from '@theme/theme.buttons';
import texts from '@theme/theme.texts';
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

const ButtonSecondary: React.FC<ButtonPrimaryProps> = ({ navigation, link, text, styleBg, styleTxt, action}) => {
    const changeView = (url: string) => {
        navigation?.navigate(url);
    };

    return (
        <Pressable onPress={action}>
            <Text style={[texts.textPrimary, styleTxt]}>{text}</Text>
        </Pressable>
    );
};

export default ButtonSecondary;
