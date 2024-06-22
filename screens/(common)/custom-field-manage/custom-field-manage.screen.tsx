import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useCustomFieldManage from '@screens/(common)/custom-field-manage/custom-field-manage.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import ButtonIcon from '@components/buttons/button-icon';
import { Category } from 'iconsax-react-native';
import { NestableDraggableFlatList, NestableScrollContainer, RenderItemParams } from 'react-native-draggable-flatlist';
import RenderItem from '@/components/custom-fields/render-item/render-item';
const CustomFieldManageScreen = ({ navigation, route }) => {
  // const styles = useStyles();
  const { customField, keyExtractor, handleDragEnd, handleDelete, control, tabs, setTabs, title, errors, handleSubmit, schema } = useCustomFieldManage({ route });

  // console.log(customField);
 



  return (
    <>
      {/* <Banner title={"Gérer les champs personnalisés"} /> */}
      <View style={styles.container}>
        {/* <View style={styles.buttonContainer}> */}
          <ButtonIcon text="Valider" type="primary" icon="Add" action={() => navigation.navigate("CustomFieldPost", { schema })} />
        {/* </View>  */}
        <GestureHandlerRootView style={styles.containerDrag}>
          {customField && customField.length > 0 && (
            <NestableScrollContainer>
             <NestableDraggableFlatList
                data={customField}
                renderItem={({ item, drag, isActive }) => (
                  <RenderItem 
                    item={item} 
                    drag={drag} 
                    isActive={isActive} 
                    handleDelete={handleDelete} 
                    schema={schema} 
                    navigation={navigation} 
                  />
                )}
                keyExtractor={keyExtractor}
                onDragEnd={handleDragEnd}
              />
            </NestableScrollContainer>
          )}
        </GestureHandlerRootView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    flexDirection: "column",
    backgroundColor: "red"
  },
  containerDrag: {
    width: '100%',
    flexDirection: "column"
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
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

export default CustomFieldManageScreen;
