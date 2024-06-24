import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ChipProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

const Chip: React.FC<ChipProps> = ({ selected, onPress, text, colors }) => {
  return (
    <TouchableOpacity
      style={[styles.chip, {backgroundColor: selected ? colors.background : "#E4E4E7"}]}
      onPress={onPress}>
      <Text style={[styles.chipText, {color: selected ? colors.foreground : "#3F3F46"}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    fontFamily: 'Poppins500',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    textAlign: "center",
    alignSelf: "flex-start"
  },
  chipText: {
    fontSize: 12,
  }
});

export default Chip;
