import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from '@/components/cards/card-category/card-category.styles';
import { Home2 } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';

const CardCategory = ({ title, icon, color, link}) => {

    const styles = useStyles();
    const navigation = useNavigation();

    console.log(color);
    

    return (
        <TouchableOpacity style={[styles.container]} onPress={() => navigation.navigate(link)}>
            <View style={[styles.bgIcon, {backgroundColor: color.background}]}>
                <Home2 color={color.foreground} size={20}/>
            </View>
            <Text style={[styles.text, {color: color.foreground}]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CardCategory;
