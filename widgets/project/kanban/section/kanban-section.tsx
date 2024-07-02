import React from 'react';
import { Text, View } from 'react-native';
import {
  NestableDraggableFlatList
} from 'react-native-draggable-flatlist';
import useStyles from "@widgets/project/kanban/section/kanban-section.styles";
import ButtonIcon from '@/components/buttons/button-icon';
import useKanbanSection from "@widgets/project/kanban/section/kanban-section.hook";

export default function KanbanSection({ projectId, title, data, keyExtractor, renderItem }) {
  const styles = useStyles();
  const { tasks, setTasks } = useKanbanSection({ id: data._id });

  return (
    <View style={[styles.container]}>
      <View style={[styles.blocTitle]}>
        <View style={[styles.blocTitleLeft]}>
          <Text style={[styles.sectionTitle]}>{title}</Text>
          <View style={[styles.count]}>
            <Text style={[styles.countText]}>{tasks.length}</Text>
          </View>
        </View>
        <ButtonIcon icon={"Add"} link={"TaskPost"} linkParams={{ taskCategoryId: data._id }} />
      </View>

      <NestableDraggableFlatList
        data={tasks}
        onDragEnd={({ data: d }) => setTasks(d)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
}
