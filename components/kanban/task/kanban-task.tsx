import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from '@components/kanban/task/kanban-task.styles';
import { Home2 } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import Flag from '@components/flag/flag';
import ProgressBar from '@components/progress-bar/progress-bar';
import { ScaleDecorator } from 'react-native-draggable-flatlist';

export default function KanbanTask({ item, drag, isActive }) {
    const styles = useStyles();

    console.log(item);
    

    return (
      <ScaleDecorator>
        <TouchableOpacity
          activeOpacity={1}
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.container,
            // { backgroundColor: isActive ? 'red' : item.backgroundColor },
          ]}>
          <View style={[styles.full]}>
                <Text style={[styles.textDate]}>{item.createdAt}</Text>
            </View>
            <View style={[styles.full]}>
                <Text style={[styles.textName]}>{item.title}</Text>
            </View>
            <View style={[styles.full]}>
                <ProgressBar progress={0.5} colors={{"background": "#FFF0D5", "foreground": "#FFC045"}} />
            </View>

            <View style={[styles.full]}>
                <Flag text={"Urgent"} colors={{"background": "#FFE1E1", "foreground": "#FD4949"}}/>
                <Flag text={"Logo"} colors={{"background": "#E2F6FE", "foreground": "#35BFFF"}}/>
            </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );

}
