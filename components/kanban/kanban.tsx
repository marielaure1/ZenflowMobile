import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  NestableScrollContainer,
  NestableDraggableFlatList,
  ScaleDecorator,
  RenderItemParams,
} from 'react-native-draggable-flatlist';

export default function Basic() {
  const [data1, setData1] = useState([
    {
        text: 1,
        key: `key-1`,
        backgroundColor: "red",
    },
    {
        text: 4,
        key: `key-4`,
        backgroundColor: "red",
    }
  ]);
  const [data2, setData2] = useState([
    {
        text: 1,
        key: `key-1`,
        backgroundColor: "yellow",
    }
  ]);
  const [data3, setData3] = useState([
    {
        text: 1,
        key: `key-1`,
        backgroundColor: "red",
    }
  ]);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          activeOpacity={1}
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem,
            { backgroundColor: isActive ? 'red' : item.backgroundColor },
          ]}>
          <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  const keyExtractor = (item: Item) => item.key;

  return (
    <NestableScrollContainer horizontal style={[styles.containerKanban, { backgroundColor: 'seashell' }]}>
      <View>
        <Header text={'List 1'} />
        <NestableDraggableFlatList
            data={data1}
            onDragEnd={({ data }) => setData1(data)}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            style={styles.section}
        />
      </View>
      <Header text={'List 2'} />
      <NestableDraggableFlatList
        data={data2}
        onDragEnd={({ data }) => setData2(data)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <Header text={'List 3'} />
      <NestableDraggableFlatList
        data={data3}
        onDragEnd={({ data }) => setData3(data)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </NestableScrollContainer>
  );
}

function Header({ text }: { text: string }) {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          padding: 24,
          color: '#555',
        }}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerKanban:{
    flexDirection: "row"
  },
  section: {
    width: 300
  }
});

