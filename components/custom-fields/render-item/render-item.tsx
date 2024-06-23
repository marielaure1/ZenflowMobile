import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonIcon from '@components/buttons/button-icon';
import { Category } from 'iconsax-react-native';

const RenderItem = ({ item, drag, parentId, isActive, handleDelete, schema, navigation }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onLongPress={drag}>
      <View style={styles.itemContent}>
        <Category color={'#171717'} variant="Linear" size={18} />
        <Text>{item.name}</Text>
      </View>
      <View style={styles.itemActions}>
        <ButtonIcon text="Edit" type="primary" icon="Magicpen" action={() => navigation.navigate("CustomFieldPost", { item, schema, parentId })} />
        <ButtonIcon text="Delete" type="primary" icon="Trash" action={() => handleDelete(item._id)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 10,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default RenderItem;
