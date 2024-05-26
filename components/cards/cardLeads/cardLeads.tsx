import React, {useContext} from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, View } from 'react-native';
// import buttons from '@theme/theme.buttons';
// import texts from '@theme/theme.texts';
// import ButtonSecondary from "@components/buttons/buttonSecondary";
// import useHeader from "@/src/components/layout/header/header.hook";
import useStyles from "@/src/components/cards/cardLeads/cardLeads.styles";
import Flag from "@/src/components/flag/flag";

interface CardLeadsProps {
    data :object;
}

const CardLeads = ({data} : CardLeadsProps) => {
    const styles = useStyles();
    
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{data?.name?.first} {data?.name?.last}</Text>
                <View style={styles.cardFlags}>
                    <Flag text={"Maintenance"} color={"blue"}/>
                    <View style={{ width: 10 }}></View>
                    <Flag text={"20%"} color={"blue"}/>
                </View>
            </View>
            
            <View style={styles.cardBody}>
                <View style={styles.cardLine}>
                    <Text style={styles.cardLineText}>Email: </Text>
                    <Text style={styles.cardLineText}>{data?.email}</Text>
                </View>
                <View style={styles.cardLine}>
                    <Text style={styles.cardLineText}>Téléphone: </Text>
                    <Text style={styles.cardLineText}>{data?.phone}</Text>
                </View>
                {/* <View style={styles.cardLine}>
                    <Text style={styles.cardLineText}>Client depuis le : </Text>
                    <Text style={styles.cardLineText}>23/09/2022</Text>
                </View>
                <View style={styles.cardLine}>
                    <Text style={styles.cardLineText}>Date dernier contact : </Text>
                    <Text style={styles.cardLineText}>23/10/2022</Text>
                </View> */}
            </View>
        </View>
    );
};

export default CardLeads;
