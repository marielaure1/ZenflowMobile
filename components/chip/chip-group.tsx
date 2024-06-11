import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Chip from '@components/chip/chip';

interface ChipGroupProps {
  options: string[];
  multiple?: boolean;
  onChange?: (selected: string[]) => void;
}

const ChipGroup: React.FC<ChipGroupProps> = ({ options, multiple = false, onChange }) => {
  
    const [selectedChips, setSelectedChips] = useState<string[]>([]);

    const handlePressChips = (label: string) => {
      if (multiple) {
        if (selectedChips.includes(label)) {
          setSelectedChips((prev) => prev.filter((chip) => chip !== label));
        } else {
          setSelectedChips((prev) => [...prev, label]);
        }
      }
      if (onChange) {
        onChange(selectedChips);
      }
    };
    
    const [selectedChip, setSelectedChip] = useState<string>("");

    const handlePressChip = (label: string) => {
      setSelectedChip(label)

      console.log(label);
      

      if (onChange) {
        onChange(selectedChip);
      }
    };

  return (
    <View style={styles.chipGroup}>
      {options.map((option, key) => (
        <Chip
          key={key}
          text={option.text}
          colors={option.colors}
          selected={multiple ? selectedChips.includes(option.text) : selectedChip.includes(option.text)}
          onPress={() => multiple ? handlePressChips(option.text) : handlePressChip(option.text)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  chipGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
});

export default ChipGroup;
