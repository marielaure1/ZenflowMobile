import React from 'react';
import { TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import Card from '@components/cards/card/card';
import useDateFormatter from '@hooks/useDateFormatter';
import NoteFoldersProps from '@interfaces/note-folders.interface';
import { useNavigation } from '@react-navigation/native';
import { Folder } from 'iconsax-react-native';

interface CardClientsProps {
  data: NoteFoldersProps;
}


const CardClients: React.FC<CardClientsProps> = ({ data }) => {
    const navigation = useNavigation();
    
    return (
        <Card className='w-[47%]'>
            <TouchableOpacity className="flex-col gap-md " onPress={() => navigation.navigate("Note", { id: data._id })}>
                <Folder size="32" color="#FF8A65"/>
                <View className="flex-col gap-xs">
                    {data?.title && <Text className='text-lg text-neutral-900 font-[Poppins600]' >{data?.title}</Text>}
                </View>
            </TouchableOpacity>
        </Card>
    );
};

export default CardClients;
