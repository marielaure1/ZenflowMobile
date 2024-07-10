import React from 'react';
import { View, Text } from 'react-native';
import Card from '@components/cards/card/card';
import CustomField from '@interfaces/custom-fields.interface';
import useDateFormatter from '@hooks/useDateFormatter';
import StatusEnum from '@enums/status.enum';
import Priority from '@enums/priority.enum';
import statusList from '@constants/flags';
import priorityList from '@constants/priority';
import Flag from '@/components/flag/flag';

interface ProjectInfosProps {
  project: {
    name: string;
    description: string;
    picture?: string;
    status?: StatusEnum;
    priority?: Priority;
    clientId?: string;
    ownerId: string;
    teamId?: string;
    customFields?: Map<string, CustomField>;
    createdAt?: Date;
    updatedAt?: Date;
  };
  customFields?: CustomField[];
}

const ProjectInfos: React.FC<ProjectInfosProps> = ({ project, customFields }) => {

  const status = statusList.filter((val) => val?.status.includes(project?.status))
  const priority = priorityList.filter((val) => val?.type.includes(project?.priority))
  

  return (
    <>
      <View className='flex-col gap-xl'>
        <Card>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Nom:</Text>
            <Text className='text-md font-[Poppins600]'>{project.name}</Text>
          </View>

          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Description:</Text>
            <Text className='text-md font-[Poppins600]'>{project.description}</Text>
          </View>

          {project.picture && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Image:</Text>
              <Text className='text-md font-[Poppins600]'>{project.picture}</Text>
            </View>
          )}

          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Statut:</Text>
            {project?.status && <Flag text={status[0].text} colors={{"background": status[0].background, "foreground": status[0].foreground}}/>}
          </View>

          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Priorité:</Text>
            {project?.priority && <Flag text={priority[0].text} colors={{"background": priority[0].background, "foreground": priority[0].foreground}}/>}
          </View>
          {project?.clientId && (
              <View className='flex-row gap-md justify-between'>
                <Text className='text-md font-[Poppins400]'>Client:</Text>
                <Text className='text-md font-[Poppins600]'>{project?.clientId}</Text>
            </View>
          )}
        

          {/* <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Propriétaire:</Text>
            <Text className='text-md font-[Poppins600]'>{project.ownerId}</Text>
          </View> */}

          {/* {project.teamId && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Équipe:</Text>
              <Text className='text-md font-[Poppins600]'>{project.teamId}</Text>
            </View>
          )} */}

          {project.createdAt && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Créé le:</Text>
              <Text className='text-md font-[Poppins600]'>{useDateFormatter(project.createdAt, 'dd MMMM, yyyy à HH:mm')}</Text>
            </View>
          )}

          {project.updatedAt && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Mis à jour le:</Text>
              <Text className='text-md font-[Poppins600]'>{useDateFormatter(project.updatedAt, 'dd MMMM, yyyy à HH:mm')}</Text>
            </View>
          )}
        </Card>

        {customFields && (
          <Card>
            {Array.from(customFields.entries()).map(([key, customField], index) => (
              <View className='flex-row gap-md justify-between' key={index}>
                <Text className='text-md font-[Poppins400]'>{key}:</Text>
                <Text className='text-md font-[Poppins600]'>{customField.value}</Text>
              </View>
            ))}
          </Card>
        )}
      </View>
    </>
  );
};

export default ProjectInfos;
