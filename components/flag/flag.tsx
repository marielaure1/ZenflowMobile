import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, View } from 'react-native';
// import texts from '@theme/theme.texts';
// import ButtonSecondary from "@components/buttons/buttonSecondary";
// import useHeader from "@components/layout/header/header.hook";
import useStyles from "@/components/flag/flag.styles";
import {colorsFlag} from '@theme/theme.colors';
// import Menu from "@assets/icons/essentional/menu";

interface FlagProps {
    text :string;
    color :object;
}

const Header: React.FC<FlagProps> = ({text, colors}) => {
    const styles = useStyles();

    return (
        <Text style={[styles.flag, {backgroundColor: colors.background, color: colors.foreground}]}> {text}</Text>
    );
};

export default Header;
