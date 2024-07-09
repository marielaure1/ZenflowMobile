import React from 'react';
import { View } from 'react-native';
import useTask from './task.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import TaskInfos from '@widgets/project/task-infos/task-infos';
import FetchPending from '@components/fetch-pending/fetch-pending';
import Fabs from '@components/fabs/fabs/fabs-clients';
import { Magicpen, Trash } from 'iconsax-react-native';
import queryClient from '@/api/config.react-query';

const TasksScreen = ({ route, navigation }) => {
  const {
    task,
    isLoading,
    error,
    editingField,
    setEditingField,
    handleDelete,
     control,
     errors
  } = useTask({ route });

  if (isLoading || error) {
    return <FetchPending isLoading={isLoading} error={error?.message} type="Task Not Found" />;
  }

  return (
    <>
      <Template>
        <Banner title={task?.datas?.tasks?.title} btnBack />
        <View>
          <TaskInfos
            task={task?.datas?.tasks}
            editingField={editingField}
            setEditingField={setEditingField}
            control={control}
            errors={errors}
          />
        </View>
      </Template>
      <Fabs
        btns={[
          {
            icon: <Magicpen size={24} color="#FB923C" />,
            text: 'Edit Task',
            delay: 240,
            value: 260,
            action: () => navigation.navigate("TaskEdit", { task }),
            colors: { background: "#FFEDD5", foreground: "#FB923C" }
          },
          {
            icon: <Trash size={24} color="#FF6666" />,
            text: 'Delete Task',
            delay: 220,
            value: 200,
            action: () => handleDelete(task.id),
            colors: { background: "#FFE5E5", foreground: "#FF6666" }
          }
        ]}
      />
    </>
  );
};

export default TasksScreen;
