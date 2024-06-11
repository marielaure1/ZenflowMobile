import React from 'react';
import { TouchableOpacity, Pressable, StyleSheet, Text, ViewStyle, Image, View } from 'react-native';
import buttons from '@theme/theme.buttons';
import { StyleProp } from 'react-native';
import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types';
import { useNavigation } from '@react-navigation/native';
import { Add, ChemicalGlass } from 'iconsax-react-native'

interface ButtonIconProps {
    link?: string;
    linkParams?: Object;
    action?: Callback;
    icon: string
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ link, linkParams = {}, action, icon}) => {
    const navigation = useNavigation();

    const changeView = (url: string, params) => {
        
        navigation?.navigate(url, params);
    };

    let iconTag = <></>;
    let btnStyle = {};

    switch (icon){
      case "ChemicalGlass":
        iconTag = <ChemicalGlass color={'#38BDF8'} variant="Linear" size={18} />;
        btnStyle = buttons.buttonPrimary;
        break;
    case "Add":
        iconTag = <Add color={'#38BDF8'} variant="Linear" size={18} />;
        btnStyle = buttons.buttonBlue;
        break;
      default:
        break;
    }
      

    return (
        <TouchableOpacity style={[buttons.buttonIcon, btnStyle]} onPress={() => link ? changeView(link, linkParams) : action}>
            {iconTag}
        </TouchableOpacity>
    );
};

export default ButtonIcon;
