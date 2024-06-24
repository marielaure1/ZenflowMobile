import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from '@components/cards/card-project/card-project.styles';
import { Home2 } from 'iconsax-react-native';
import Flag from '@components/flag/flag';
import ProgressBar from '@components/progress-bar/progress-bar';
import useDateFormatter from '@hooks/useDateFormatter';
import useCardProject from '@components/cards/card-project/card-project.hook';
import Card from '@components/cards/card/card';

const CardProject = ({ data }) => {

    const styles = useStyles();

    const { navigation, error, project, refetch, tabs, setTabs, taskPourcent } = useCardProject({id: data._id });

    const createdAt = useDateFormatter(data.createdAt, 'dd MMMM yyyy');

    return (
        <Card>
            <TouchableOpacity className='flex-col gap-md' onPress={() => navigation.navigate("Project", { id: data._id })}>
                <View className='flex-row w-full'>
                    <Text className='text-sm text-zinc-500'>Créer le {createdAt}</Text>
                </View>
                <View className='flex-row w-full'>
                    <Text className='text-md text-zinc-900'>{data.name}</Text>
                </View>
                {/* <View className='flex-row w-full'>
                    <Flag text={"Site vitrine"} colors={{"background": "#FFF0D5", "foreground": "#FFC045"}}/>
                    <Flag text={"Logo"} colors={{"background": "#FFF0D5", "foreground": "#FFC045"}}/>
                </View> */}
                <View className='flex-row w-full'>
                    <ProgressBar progress={taskPourcent} colors={{"background": "#FFF0D5", "foreground": "#FFC045"}} />
                </View>

                <View className='flex-row w-full'>
                    <Flag text={"Urgent"} colors={{"background": "#FFE1E1", "foreground": "#FD4949"}}/>
                    <Flag text={"Logo"} colors={{"background": "#E2F6FE", "foreground": "#35BFFF"}}/>
                </View>
            </TouchableOpacity>
        </Card>
    );
};

export default CardProject;
