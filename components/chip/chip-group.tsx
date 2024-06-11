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

  const handlePress = (label: string) => {
    if (multiple) {
      if (selectedChips.includes(label)) {
        setSelectedChips((prev) => prev.filter((chip) => chip !== label));
      } else {
        setSelectedChips((prev) => [...prev, label]);
      }
    } else {
      setSelectedChips([label]);
    }
    if (onChange) {
      onChange(selectedChips);
    }
  };

  return (
    <View style={styles.chipGroup}>
      {options.map((option) => (
        <Chip
          key={option}
          text={option.text}
          colors={option.colors}
          selected={selectedChips.includes(option.text)}
          onPress={() => handlePress(option.text)}
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
