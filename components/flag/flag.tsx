import React, {useContext} from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, View } from 'react-native';
// import texts from '@theme/theme.texts';
// import ButtonSecondary from "@components/buttons/buttonSecondary";
// import useHeader from "@/src/components/layout/header/header.hook";
import useStyles from "@/src/components/flag/flag.styles";
import {colorsFlag} from '@theme/theme.colors';
// import Menu from "@assets/icons/essentional/menu";

interface FlagProps {
    text :string;
    color :string;
}

const Header: React.FC<FlagProps> = ({text, color}) => {
    const styles = useStyles();

    return (
        <Text style={[styles.flag, {backgroundColor: colorsFlag[color]["background"], color: colorsFlag[color]["color"]}]}> {text}</Text>
    );
};

export default Header;
