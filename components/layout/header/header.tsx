import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, View } from 'react-native';
// import buttons from '@theme/theme.buttons';
// import texts from '@theme/theme.texts';
// import ButtonSecondary from "@components/buttons/buttonSecondary";
// import useHeader from "@components/layout/header/header.hook";
import useStyles from "@/components/layout/header/header.styles";
// import Menu from "@assets/icons/essentional/menu";

const Header: React.FC = ({navigation}) => {
    // const {handleSignOut} = useHeader()
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <Pressable style={styles.burger}>
                <Text>Rush</Text>
            </Pressable>
            <Text>Rush</Text>
        </View>
    );
};

export default Header;
