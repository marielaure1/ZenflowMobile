import React from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import useProject from '@/screens/(notes)/note-folder-post/note-folder-post.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import Button from '@components/buttons/button';
import FieldControl from '@components/fields/field-control';

const TaskPostScreen = ({ route }) => {
  const { control, errors, title, handleCreate, handleUpdate, handleSubmit } = useProject({ route });

  return (
    <Template>
      <Banner title={title} />
      <View className="flex-col gap-md">
        <FieldControl
          control={control}
          name="title"
          label="Titre du dossier"
          error={errors.title}
          rules={{ required: 'Ce champ est requis' }}
        />

        <FieldControl
          control={control}
          name="description"
          label="Description"
          error={errors.description}
        />

        <Button text="Valider" type="primary" action={handleSubmit(route?.params?.noteFolder ? handleUpdate : handleCreate)} />
      </View>
    </Template>
  );
};

export default TaskPostScreen;
