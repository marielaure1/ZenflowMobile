import Flag from "@components/flag/flag"
import Card from "@components/cards/card/card"
import React from "react"
import { View, Text } from "react-native"
import useStyles from "@components/analyse/analyse-number/analyse-number.styles";

const AnalyseNumber = ({ title, number, progress, color}) => {
    const styles = useStyles();

    let colors = {"background": "#FFE1E1", "foreground": "#FD4949"};

    switch (color) {
        case "red":
            colors = {"background": "#FFE1E1", "foreground": "#FD4949"};
            break;
    
        default:
            break;
    }

    return(
        <Card className="">
            <Text style={[styles.title]}>{title}</Text>
            <View style={[styles.blocData]}>
                <Text style={[styles.data]}>{number}</Text>
                <Flag text={progress} colors={colors}/>
            </View>
        </Card>
    )
}

export default AnalyseNumber;