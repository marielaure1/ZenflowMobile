import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  NestableScrollContainer,
  NestableDraggableFlatList,
  ScaleDecorator,
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import useStyles from "@components/kanban/kanban.styles";
import KanbanTask from '@components/kanban/task/kanban-task';
import KanbanSection from './section/kanban-section';
import Card from '../cards/card/card';
import ButtonPrimary from '../buttons/button';

export default function Kanban({projectId, datas}) {
  const styles = useStyles();

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
    return (
      <KanbanTask item={item} drag={drag} isActive={isActive}/>
    );
  };

  const keyExtractor = (item: Item) => item._id;

  return (
    <>
      {datas.length > 0 && (
        <NestableScrollContainer horizontal style={[styles.containerKanban]}>

          {datas && datas.map((section, key) => (
              <KanbanSection 
              key={key}
              title={section?.name}
              data={section}
              projectId={projectId}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
            />
          ))}
        </NestableScrollContainer>
      )}

    {datas.length < 1 && (
      <Card>
        <Text style={styles.textEmpty}>Commencer a gérer votre projet</Text>
        <ButtonPrimary type={"blue"} text="Ajouter une section" link={"TaskCategoryPost"} linkParams={{projectId: projectId}}/>
      </Card>
    )}
  </>
  );
}
