import React from 'react';
import { TouchableOpacity, Pressable, StyleSheet, Text, ViewStyle, Image, View } from 'react-native';
import buttons from '@theme/theme.buttons';
import { StyleProp } from 'react-native';
import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types';
import { useNavigation } from '@react-navigation/native';
import Arrow from "@icons/essentional/arrow";

interface ButtonGoBackProps {
    link?: string;
}

const ButtonPrimary: React.FC<ButtonGoBackProps> = ({ link }) => {

    const navigation = useNavigation();

    const changeView = (url: string) => {
        navigation?.goBack(url);
    };

    return (
        <TouchableOpacity style={[buttons.button, buttons.buttonWhite, buttons.buttonRounded]} onPress={() => changeView(link)}>
            <View style={[buttons.buttonRoundedIcon]}>
               <Arrow/>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonPrimary;
