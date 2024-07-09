import React from 'react';
import { View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useProjectPost from '@screens/(projects)/project-post/project-post.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import Button from '@components/buttons/button';
import FieldControl from '@components/fields/field-control';
import StatusEnum from '@/common/enums/status.enum';
import PriorityEnum from '@/common/enums/priority.enum';
import Loading from '@/screens/(common)/loading/loading.screen';

const ProjectPostScreen = ({ route, navigation }) => {
  const {isLoading,  project, control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit } = useProjectPost({ route });

  if(isLoading){
    return <Loading/>
  }

  return (
    <Template>
      <Banner title={title} btnBack={true} />
      <View className='flex-col gap-md'>
        <FieldControl
          control={control}
          name="name"
          label="Titre"
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

        <FieldControl
          control={control}
          name="status"
          label="Statut"
          error={errors.status}
          type="chips"
          defaultSelected={[project ? project?.status : StatusEnum.ACTIVE]}
          options={[
            { type: StatusEnum.ACTIVE, text: "Active", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
            { type: StatusEnum.INACTIVE, text: "Inactive", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
            { type: StatusEnum.SUSPENDED, text: "Suspendu", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
            { type: StatusEnum.PENDING, text: "En attente", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
            { type: StatusEnum.CALL_AGAIN, text: "A relancer", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
            { type: StatusEnum.LOST, text: "Perdu", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
          ]}
          item={project}
        />

        <FieldControl
          control={control}
          name="priority"
          label="Priorité"
          error={errors.priority}
          type="chips"
          defaultSelected={[project ? project?.priority : PriorityEnum.MEDIUM]}
          options={[
            { type: PriorityEnum.HIGH, text: "Haute", colors: { background: "#FFCDD2", foreground: "#D32F2F" } },
            { type: PriorityEnum.MEDIUM, text: "Moyen", colors: { background: "#FFF9C4", foreground: "#FBC02D" } },
            { type: PriorityEnum.LOW, text: "Basse", colors: { background: "#C8E6C9", foreground: "#388E3C" } },
            { type: PriorityEnum.URGENT, text: "Urgent", colors: { background: "#C8E6C9", foreground: "#388E3C" } },
          ]}
          item={project}
        />
        <Button text="Valider" type="primary" action={handleSubmit(route?.params?.project ? handleUpdate : handleCreate)} />
      </View>
    </Template>
  );
};

export default ProjectPostScreen;
