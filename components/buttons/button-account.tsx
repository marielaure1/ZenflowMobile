import React from 'react';
import { TouchableOpacity, Pressable, StyleSheet, Text, ViewStyle, Image, View } from 'react-native';
import buttons from '@theme/theme.buttons';
import { StyleProp } from 'react-native';
import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types';
import { useNavigation } from '@react-navigation/native';
import { Add, ChemicalGlass } from 'iconsax-react-native'

interface ButtonAccountProps {
    navigation?: any; 
    link?: string;
}

const ButtonAccount: React.FC<ButtonAccountProps> = ({ link, text, icon}) => {

    const navigation = useNavigation();

    const changeView = (url: string) => {
        navigation?.navigate(url);
    };

    let iconTag = <></>;

    switch (icon){
      case "ChemicalGlass":
        iconTag = <ChemicalGlass color={'#181818'} variant="Linear" size={15} />;
        break;
      case "Add":
        iconTag = <Add color={'#38BDF8'} variant="Linear" size={15} />;
        break;
      default:
        break;
    }
      

    return (
        <TouchableOpacity style={[buttons.buttonAccount]} onPress={() => changeView(link)}>
            <View style={[buttons.buttonAccountLeft]}>
              {iconTag}
              <Text style={[buttons.buttonAccountText]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonAccount;
