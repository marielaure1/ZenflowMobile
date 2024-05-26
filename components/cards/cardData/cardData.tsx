import React, {useContext} from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, View } from 'react-native';
// import buttons from '@theme/theme.buttons';
// import texts from '@theme/theme.texts';
// import ButtonSecondary from "@components/buttons/buttonSecondary";
// import useHeader from "@/src/components/layout/header/header.hook";
import useStyles from "@/src/components/cards/cardData/cardData.styles";
import Flag from "@/src/components/flag/flag";
// import Menu from "@assets/icons/essentional/menu";

interface CardProps {
    title :string;
    number :string;
    type? :string;
    evolution :number;
}
const Header: React.FC<CardProps> = ({title, number, evolution, type}) => {
    const styles = useStyles();
    let evolutionColor = "green";

    if(evolution < -2){
        evolutionColor = "red"
    } else if(evolution < 2 && evolution > -2){
        evolutionColor = "orange"
    }

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}> {title}</Text>
            <View style={styles.cardBody}>
                <Text style={styles.cardNumber}>
                    {number}
                    <Text style={styles.cardType}> {type}</Text>
                </Text>
                <Flag text={evolution + "%"} color={evolutionColor}/>
            </View>
        </View>
    );
};

export default Header;
