import React from 'react';
import { TouchableOpacity, Pressable, StyleSheet, Text, ViewStyle, Image, View } from 'react-native';
import buttons from '@theme/theme.buttons';
import { StyleProp } from 'react-native';
import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types';
import { useNavigation } from '@react-navigation/native';
import useStyles from "@/components/tabs-view/basic/tabs-view-basic.styles"
import { Activity, Home2, Profile2User, TableDocument, TaskSquare } from 'iconsax-react-native';

interface TabsViewBasicProps {
    view: string;
    text: string;
    setView?: Callback;
    icon?: string;
    color: object;
}

const TabsViewBasic: React.FC = ({ view, setView, text, colors}) => {

    const styles = useStyles();
    let iconElement;
    let size = 20;

    switch (text) {
        case "Analyse":
            iconElement = <Activity color={colors.foreground} size={size}/>;
            break;
        case "Infos":
            iconElement = <TableDocument color={colors.foreground} size={size}/>;
            break;
        default:
            iconElement = <TaskSquare color={colors.foreground} size={size}/>;
            break;
    }

    return (
      <TouchableOpacity style={[styles.container, view == text ? { backgroundColor: colors.background} : {}]} onPress={() => setView(text)}>
          <View style={[styles.bgIcon, {backgroundColor: colors.background}]}>
              {iconElement}
          </View>
          <Text style={[styles.text, {color: colors.foreground}]}>{text}</Text>
      </TouchableOpacity>
    );
};

export default TabsViewBasic;
