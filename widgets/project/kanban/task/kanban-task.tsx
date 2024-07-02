import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from '@widgets/project/kanban/task/kanban-task.styles';
import { useNavigation } from '@react-navigation/native';
import Flag from '@components/flag/flag';
import ProgressBar from '@components/progress-bar/progress-bar';
import { ScaleDecorator } from 'react-native-draggable-flatlist';
import useDateFormatter from '@/common/hooks/useDateFormatter';
import priorityList from '@constants/priority';

const KanbanTask = ({ item, drag, isActive, sectionId }) => {
  const styles = useStyles();
  const navigation = useNavigation();

  const flags = priorityList.filter(priority => item.priority === priority.type);

  return (
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={drag}
        onPress={() => navigation.navigate("Task", { task: item, sectionId: sectionId })}
        disabled={isActive}
        style={[
          styles.container,
          // { backgroundColor: isActive ? 'red' : item.backgroundColor },
        ]}>

        {item?.dueDate && (
          <View style={[styles.full]}>
            <Text style={[styles.textDate]}>{useDateFormatter(item?.dueDate, 'dd MMMM yyyy')}</Text>
          </View>
        )}
        
        <View style={[styles.full]}>
          <Text style={[styles.textName]}>{item.title}</Text>
        </View>
        
        <View style={[styles.full]}>
          <ProgressBar progress={0.5} colors={{ "background": "#FFF0D5", "foreground": "#FFC045" }} />
        </View>

        <View style={[styles.full]}>
          {flags.map((flag, index) => (
            <Flag key={index} text={flag.text} colors={flag.colors} />
          ))}
        </View>
      </TouchableOpacity>
  );
};

export default KanbanTask;
