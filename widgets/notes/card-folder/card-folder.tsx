import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';
import Card from '@components/cards/card/card';
import { Folder } from 'iconsax-react-native';
import NoteFoldersProps from '@interfaces/note-folders.interface';

interface CardFolderProps {
  data: NoteFoldersProps;
  onPress: () => void;
}

const CardFolder: React.FC<CardFolderProps> = ({ data, onPress }) => {
  const cardWidth = Dimensions.get('window').width;
  return (
    <Card style={[{ width: cardWidth / 2 - 23.5 }]}>
      <TouchableOpacity className="flex-col gap-md items-center" onPress={onPress}>
        <Folder size="32" color="#FF8A65" />
        <View className="flex-col gap-xs">
          {data?.title && <Text className='text-lg text-neutral-900 font-[Poppins600]'>{data?.title}</Text>}
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default CardFolder;
