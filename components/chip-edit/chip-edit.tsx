import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types';
import ButtonIcon from '../buttons/button-icon';
// import "@theme/global.css";

interface ChipProps {
  chip: object;
  value: object;
  selected: boolean;
  onPress: () => void;
  // colors: { background: string, foreground: string };
  setEditingChip: Callback;
  handleDeleteChip: Callback;

}

const Chip: React.FC<ChipProps> = ({ selected, value, onPress, chip, setEditingChip, handleDeleteChip }) => {
  return (
    <TouchableOpacity
      className={"p-[15px] w-full flex-row justify-between items-center gap-md rounded-[15px] bg-base-0"}
      onPress={onPress}
    >
      <Text className={`text-[14px] text-zinc-900`}>
        {chip.text}
      </Text>

     <View className={`flex-row gap-sm`}>
        <ButtonIcon text="Edit" type="primary" icon="Magicpen" action={() => setEditingChip(chip.type)} />
        <ButtonIcon text="Delete" type="primary" icon="Trash" action={() => handleDeleteChip(chip.type)} />
     </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    textAlign: "center",
    alignSelf: "flex-start",
  },
  chipText: {
    fontSize: 12,
  },
});

export default Chip;
