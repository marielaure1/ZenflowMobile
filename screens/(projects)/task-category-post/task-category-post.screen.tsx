import React from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import useProject from '@/screens/(projects)/task-category-post/task-category-post.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import Button from '@components/buttons/button';
import FieldControl from '@components/fields/field-control';

const TaskPostScreen = ({ route }) => {
  const { project, control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit } = useProject({ route });

  return (
    <Template>
      <Banner title={title} btnBack/>
      <View className="flex-col gap-md">
        <FieldControl
          control={control}
          name="name"
          label="Nom de la section"
          error={errors.name}
          rules={{ required: 'Ce champ est requis' }}
        />

        <FieldControl
          control={control}
          name="description"
          label="Description"
          error={errors.description}
          rules={{ required: 'Ce champ est requis' }}
        />

        <Button text="Valider" type="primary" action={handleSubmit(route?.params?.project ? handleUpdate : handleCreate)} />
      </View>
    </Template>
  );
};

export default TaskPostScreen;
