import React from 'react';
import { TouchableOpacity, Text, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Add, ChemicalGlass } from 'iconsax-react-native';

interface ButtonAccountProps {
    link?: string;
    action?: () => void;
    text: string;
    icon: React.ReactNode;
}

const ButtonAccount: React.FC<ButtonAccountProps> = ({ link, action, text, icon }) => {
    const navigation = useNavigation();

    const changeView = (url: string) => {
        navigation.navigate(url as never); 
    };

    return (
        <TouchableOpacity className='w-full p-xs flex-row justify-between' onPress={() => link ? changeView(link) : action && action()}>
            <View className='flex-row items-center gap-sm rounded-sm'>
                <View className='w-[30px] h-[30px] flex justify-center items-center rounded-lg bg-zinc-100'>
                    {icon}
                </View>
                <Text className='text-[14px] font-primary-400'>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonAccount;
