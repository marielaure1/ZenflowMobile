import React, {useContext} from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, View } from 'react-native';
// import buttons from '@theme/theme.buttons';
// import texts from '@theme/theme.texts';
// import ButtonSecondary from "@components/buttons/buttonSecondary";
// import useHeader from "@/src/components/layout/header/header.hook";
import useStyles from "@/src/components/cards/cardLeads/cardLeads.styles";
import Flag from "@/src/components/flag/flag";
// import Menu from "@assets/icons/essentional/menu";

const CardLeads: React.FC = () => {
    const styles = useStyles();

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Client</Text>
                <View style={styles.cardFlags}>
                    <Flag text={"Maintenance"} color={"blue"}/>
                    <View style={{ width: 10 }}></View>
                    <Flag text={"20%"} color={"blue"}/>
                </View>
            </View>
            
            <View style={styles.cardBody}>
                <View style={styles.cardLine}>
                    <Text style={styles.cardLineText}>Client depuis le : </Text>
                    <Text style={styles.cardLineText}>23/09/2022</Text>
                </View>
                <View style={styles.cardLine}>
                    <Text style={styles.cardLineText}>Date dernier contact : </Text>
                    <Text style={styles.cardLineText}>23/10/2022</Text>
                </View>
            </View>
        </View>
    );
};

export default CardLeads;
