import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Home2 } from 'iconsax-react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { RootStackParamList } from '@navigators/main.navigator';

interface CardCategoryProps {
  title: string;
  icon: React.ReactNode;
  color: { background: string, foreground: string};
  link: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({ title, icon, color, link }) => {
  const navigation = useNavigation<NavigationProp<string>>();

  return (
    <TouchableOpacity 
      className='p-[10px] bg-base-0 flex-col items-center justify-center gap-sm rounded-sm w-[47%] h-[100]' 
      onPress={() => navigation.navigate(link)}
    >
      <View className='bg-orange-400 rounded-[20] w-[30px] h-[30px] flex-row justify-center items-center'>
        {icon}
      </View>
      <Text className='text-md font-primary-500'>{title}</Text>
    </TouchableOpacity>
  );
};

export default CardCategory;
