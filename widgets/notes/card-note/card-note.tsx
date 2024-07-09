import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';
import Card from '@components/cards/card/card';
import useDateFormatter from '@hooks/useDateFormatter';
import NotesProps from '@interfaces/notes.interface';
import { useNavigation } from '@react-navigation/native';
import { RichText, useEditorBridge } from '@10play/tentap-editor';

interface CardClientsProps {
  data: NotesProps;
}

const CardClients: React.FC<CardClientsProps> = ({ data }) => {
  const navigation = useNavigation();
  const [editorReady, setEditorReady] = useState(false);

  const editor = useEditorBridge({
    editable: false,
    initialContent: data?.content,
  });

  useEffect(() => {
    if (editor) {
      setEditorReady(true);
    }
  }, [editor]);

  const cardWidth = Dimensions.get('window').width;

  return (
    <Card style={[{width: cardWidth / 2 - 23.5}]}>
      <TouchableOpacity className="flex-col gap-md" onPress={() => navigation.navigate("Note", { id: data._id })}>
        <View className="flex-col gap-xs">
          {data?.title && <Text className='text-lg text-neutral-900 font-[Poppins600]'>{data?.title}</Text>}
        </View>
        <View className="flex-col gap-xs" style={{ height: 100 }}>
          {editorReady && (
            <RichText editor={editor} className="text-lg text-neutral-900 font-[Poppins400]" />
          )}
        </View>
        <View className='w-full flex-row justify-between items-center'>
          {data?.updatedAt && <Text className='text-md text-base-500'>{useDateFormatter(data?.updatedAt, 'dd MMMM yyyy')}</Text>}
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default CardClients;
