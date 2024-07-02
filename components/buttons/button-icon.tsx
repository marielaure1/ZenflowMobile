import React from 'react';
import { TouchableOpacity, Pressable, StyleSheet, Text, ViewStyle, Image, View } from 'react-native';
import buttons from '@theme/theme.buttons';
import { StyleProp } from 'react-native';
import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types';
import { useNavigation } from '@react-navigation/native';
import { Add, Back, ChemicalGlass, Magicpen, Trash, TickSquare } from 'iconsax-react-native'

interface ButtonIconProps {
    link?: string;
    linkParams?: Object;
    action?: Callback;
    icon: string
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ link, linkParams = {}, action, icon,className = ""}) => {
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
        case "Magicpen":
            iconTag = <Magicpen color={'#FDBA74'} variant="Linear" size={18} />;
            btnStyle = buttons.buttonOrange;
            break;
        case "TickSquare":
            iconTag = <TickSquare color={'#10B978'} variant="Linear" size={18} />;
            btnStyle = buttons.buttonGreen;
            break;
        case "Trash":
            iconTag = <Trash color={'#FD4949'} variant="Linear" size={18} />;
            btnStyle = buttons.buttonRed;
            break;
        case "Back":
            iconTag = <Back color={'#344051'} variant="Linear" size={18} />;
            btnStyle = buttons.buttonGrey;
            break;
        default:
            iconTag = icon;
            break;
    }
      

    return (
        <TouchableOpacity style={[buttons.buttonIcon, btnStyle]} className={className} onPress={() => link ? changeView(link, linkParams) : action()}>
            {iconTag}
        </TouchableOpacity>
    );
};

export default ButtonIcon;
