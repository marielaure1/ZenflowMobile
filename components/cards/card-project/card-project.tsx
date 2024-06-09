import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from '@components/cards/card-project/card-project.styles';
import { Home2 } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import Flag from '@components/flag/flag';
import ProgressBar from '@components/progress-bar/progress-bar';

const CardProject = ({ data }) => {

    const styles = useStyles();
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={[styles.container]} onPress={() => navigation.navigate("Project", { id: data._id })}>
            <View style={[styles.full]}>
                <Text style={[styles.textDate]}>{data.updatedAt}</Text>
            </View>
            <View style={[styles.full]}>
                <Text style={[styles.textName]}>{data.name}</Text>
            </View>
            <View style={[styles.full]}>
                <Flag text={"Site vitrine"} colors={{"background": "#FFF0D5", "foreground": "#FFC045"}}/>
                <Flag text={"Logo"} colors={{"background": "#FFF0D5", "foreground": "#FFC045"}}/>
            </View>
            <View style={[styles.full]}>
                <ProgressBar progress={0.5} colors={{"background": "#FFF0D5", "foreground": "#FFC045"}} />
            </View>

            <View style={[styles.full]}>
                <Flag text={"Urgent"} colors={{"background": "#FFE1E1", "foreground": "#FD4949"}}/>
                <Flag text={"Logo"} colors={{"background": "#E2F6FE", "foreground": "#35BFFF"}}/>
            </View>
        </TouchableOpacity>
    );
};

export default CardProject;
