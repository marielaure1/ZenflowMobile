import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import useStyles from '@components/cards/card-project/card-project.styles';
import Flag from '@components/flag/flag';
import ProgressBar from '@components/progress-bar/progress-bar';
import useDateFormatter from '@hooks/useDateFormatter';
import useCardProject from '@components/cards/card-project/card-project.hook';
import Card from '@components/cards/card/card';
import StatusEnum from '@enums/status.enum';
import statusList from '@constants/flags';
import priorityList from '@constants/priority';

const CardProject = ({ data }) => {
  const styles = useStyles();

  const { navigation, taskPourcent } = useCardProject({ id: data._id });

  const status = statusList.filter((val) => val?.status.includes(data?.status))
  const priority = priorityList.filter((val) => val?.type.includes(data?.priority))
  const cardWidth = Dimensions.get('window').width;

  return (
    <Card style={[{width: cardWidth / 2 - 23.5}]}>
      <TouchableOpacity className='flex-col gap-md' onPress={() => navigation.navigate("Project", { id: data._id })}>
      <View className='w-full flex-row justify-between items-center'>
            {data?.lastContactDate ? (
              <Text className='text-sm text-base-500'>{useDateFormatter(data?.lastContactDate, 'dd MMMM yyyy')}</Text>
            ) : (
              <Text className='text-sm text-base-500'>{useDateFormatter(data?.createdAt, 'dd MMMM yyyy')}</Text>
            )}

           
        </View>
        <View className='flex-row w-full'>
          <Text className='text-md font-[Poppins600] text-zinc-900'>{data.name}</Text>
        </View>
        <View className='flex-row'>
          <ProgressBar progress={taskPourcent} colors={{ "background": "#FFF0D5", "foreground": "#FFC045" }} />
        </View>
        <View className="flex-row gap-xs">
          {data?.status && <Flag text={status[0].text} colors={{"background": status[0].background, "foreground": status[0].foreground}}/>}
          {data?.priority && <Flag text={priority[0].text} colors={{"background": priority[0].background, "foreground": priority[0].foreground}}/>}
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default CardProject;
