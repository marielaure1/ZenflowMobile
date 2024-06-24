// prospect-post.hook.ts

import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { useProspectsApi } from '@api/api';
import { useSelector } from 'react-redux';
import ProspectsProps from '@interfaces/prospects.interface';
import StatusEnum from '@/common/enums/status.enum';

interface UseProspectPostProps {
  route: any; 
}

const useProspectPost = ({ route }: UseProspectPostProps) => {
  const prospect = route?.params?.prospect as ProspectsProps;
  const prospectsApi = useProspectsApi();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tabs, setTabs] = useState<string>('Infos');
  const me = useSelector((state: any) => state?.auth?.customer); 
console.log(me);
console.log(prospect);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProspectsProps>({
    defaultValues: {
      society: prospect ? prospect?.society : '',
      lastName: prospect ? prospect.lastName : '',
      firstName: prospect ? prospect.firstName : '',
      email: prospect ? prospect.email : '',
      phone: prospect ? prospect.phone : '',
      address: prospect ? prospect.address : '',
      status: prospect ? prospect.status : StatusEnum.ACTIVE,
      lastContactDate: prospect ? prospect.lastContactDate : undefined,
      marketSegment: prospect ? prospect.marketSegment : undefined,
      needs: prospect ? prospect.needs : undefined,
      leadSource: prospect ? prospect.leadSource : undefined,
      companySize: prospect ? prospect.companySize : undefined,
      estimatedBudget: prospect ? prospect.estimatedBudget : undefined,
      customFieldValues: prospect ? prospect.customFieldValues : [],
      ownerId: me?.customer?._id
    },
  });


  const navigation = useNavigation();

  let title = prospect?._id ? 'Modifier' : 'Créer';
  title += ' un prospect';

  const handleCreate = async (data: FieldValues) => {
    try {
      const createdProspect = await prospectsApi.create(data);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (data: FieldValues) => {
    try {
      const updatedProspect = await prospectsApi.update(prospect?._id, data);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return { prospect, control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit };
};

export default useProspectPost;
