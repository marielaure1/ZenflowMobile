import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  NestableDraggableFlatList
} from 'react-native-draggable-flatlist';
import useStyles from "@components/kanban/section/kanban-section.styles";
import ButtonIcon from '@/components/buttons/button-icon';
import useKanbanSection from "@components/kanban/section/kanban-section.hook";

export default function KanbanSection({projectId, title, data, keyExtractor, renderItem}) {
 const styles = useStyles();
//  console.log(data._id);
 
 const { tasks, setTasks } = useKanbanSection({id: data._id})

//  console.log(tasks);
 
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
     {/* {tasks && tasks.map((task, key) => (
       
     ))} */}

    <NestableDraggableFlatList
       data={tasks}
       onDragEnd={({ data: d }) => setTasks(d)}
       keyExtractor={keyExtractor}
       renderItem={renderItem}
      //  style={styles.section}
     />
  </View>
  );
}


