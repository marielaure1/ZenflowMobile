// import React, {useContext} from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, View, ImageBackground, TouchableOpacity } from 'react-native';
// import buttons from '@theme/theme.buttons';
// import texts from '@theme/theme.texts';
// import ButtonSecondary from "@components/buttons/buttonSecondary";
// import useHeader from "@components/layout/header/header.hook";
import useStyles from "@/components/cards/card-prospect/card-prospect.styles";
import useCardProspect from "@components/cards/card-prospect/card-prospect.hook";
import Flag from "@/components/flag/flag";
import React from 'react';
import BackgroundBanner from "@img/banner/banner-2.png";
import Card from '@components/cards/card/card';

interface CardProspectsProps {
    data :object;
}

const CardProspects = ({data} : CardProspectsProps) => {
    const styles = useStyles();

    const { 
        navigation
    } = useCardProspect();

    console.log(data);
    
    
    return (
        <Card>  
        <TouchableOpacity  onPress={() => navigation.navigate("Prospect", { id: data._id })}>
            <View style={styles.cardHeader}>
                <View style={styles.cardHeader}>
                    <ImageBackground source={BackgroundBanner} resizeMode="cover" style={[styles.logo]}/>

                    <View style={styles.cardHeader}>
                        {data?.society && <Text style={styles.cardTitle}>{data?.society}</Text>}
                        <Text style={data?.society ? styles.cardTitle : styles.cardSubTitle }>{data?.firstName} {data?.lastName}</Text>
                    </View>
                
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
            </View>
            </TouchableOpacity>
        </Card>
    );
};

export default CardProspects;
