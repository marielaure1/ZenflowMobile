import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useCustomFieldManage from '@screens/(common)/custom-field-manage/custom-field-manage.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import ButtonIcon from '@components/buttons/button-icon';
import { NestableDraggableFlatList, NestableScrollContainer } from 'react-native-draggable-flatlist';
import RenderItem from '@widgets/custom-fields/render-item/render-item';
import FetchPending from '@components/fetch-pending/fetch-pending';

const CustomFieldManageScreen = ({ navigation, route }) => {
  // const styles = useStyles();
  const { customField, keyExtractor, handleDragEnd, handleDelete, control, tabs, setTabs, title, errors, handleSubmit, isLoading, error, schema, parentId } = useCustomFieldManage({ route });

  return (
    <Template noScroll={true}>
      <Banner title={"Gérer les champs personnalisés"} btnBack/>
      <View className='w-full flex-col gap-md'>
        <View className='flex-row justify-end'>
          <ButtonIcon text="Valider" type="primary" icon="Add" action={() => navigation.navigate("CustomFieldPost", { schema, parentId })} />
        </View> 
        <FetchPending isLoading={isLoading} error={error} type="Not Found"/>
        <GestureHandlerRootView style={[{width: "100%"}]}>
          {customField && customField.length > 0 && (
            <NestableScrollContainer>
             <NestableDraggableFlatList
                data={customField}
                renderItem={({ item, drag, isActive }) => (
                  <RenderItem 
                    item={item} 
                    parentId={parentId}
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
    </Template>
  );
};

export default CustomFieldManageScreen;
