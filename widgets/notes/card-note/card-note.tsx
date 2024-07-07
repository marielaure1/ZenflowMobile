import React from 'react';
import { TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import Card from '@components/cards/card/card';
import useDateFormatter from '@hooks/useDateFormatter';
import NotesProps from '@interfaces/notes.interface';
import { useNavigation } from '@react-navigation/native';

interface CardClientsProps {
  data: NotesProps;
}


const CardClients: React.FC<CardClientsProps> = ({ data }) => {
    const navigation = useNavigation();
    
    return (
        <Card className='w-[47%]'>
            <TouchableOpacity className="flex-col gap-md " onPress={() => navigation.navigate("Note", { id: data._id })}>
                
                <View className="flex-col gap-xs">
                    {data?.title && <Text className='text-lg text-neutral-900 font-[Poppins600]' >{data?.title}</Text>}
                </View>
                <View className="flex-col gap-xs">
                    {data?.content && <Text className={`text-lg text-neutral-900 font-[Poppins400]`}>{data?.content}</Text>}
                </View>
                <View className='w-full flex-row justify-between items-center'>
                    {data?.updatedAt && <Text className='text-md text-base-500'>{useDateFormatter(data?.updatedAt, 'dd MMMM yyyy')}</Text>}
                </View>
            </TouchableOpacity>
        </Card>
    );
};

export default CardClients;
