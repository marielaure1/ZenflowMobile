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
  const { tasks, setTasks, handleDelete } = useKanbanSection({ id: data._id });

  return (
    <View style={[styles.container]}>
      <View className='flex-col gap-sm'>
        <View style={[styles.blocTitle]}>
          <View style={[styles.blocTitleLeft]}>
            <Text style={[styles.sectionTitle]}>{title}</Text>
            <View style={[styles.count]}>
              <Text style={[styles.countText]}>{tasks.length}</Text>
            </View>
            <ButtonIcon icon={"Magicpen"} link={"TaskCategoriesPost"} linkParams={{ taskCategorieData: data }} />
            <ButtonIcon icon={"Trash"} action={() => handleDelete(data._id)} />
          </View>
          <ButtonIcon icon={"Add"} link={"TaskPost"} />
        </View>
        <View className='bg-purple-200 p-md '>
          <Text className='text-sm text-purple-600 font-[Poppins400]'>{data?.description}</Text>
        </View>
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
