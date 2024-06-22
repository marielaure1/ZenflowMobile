import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Chip from '@components/chip/chip';

interface ChipGroupProps {
  options: { text: string, type: string, colors: string[] }[];
  defaultSelected?: string[];
  multiple?: boolean;
  onChange?: (selected: string | string[]) => void;
}

const ChipGroup: React.FC<ChipGroupProps> = ({ options, multiple = false, onChange, defaultSelected = [] }) => {
  const [selectedChips, setSelectedChips] = useState<string | string[]>(multiple ? defaultSelected : defaultSelected[0] || '');

  useEffect(() => {
    if (onChange) {
      onChange(selectedChips);
    }
  }, [selectedChips]);

  const handlePressChip = (label: string) => {
    if (multiple) {
      setSelectedChips((prev) =>
        Array.isArray(prev) ? (prev.includes(label) ? prev.filter((chip) => chip !== label) : [...prev, label]) : [label]
      );
    } else {
      setSelectedChips(label);
    }
  };

  const isSelected = (label: string) => {
    if (multiple) {
      return Array.isArray(selectedChips) && selectedChips.includes(label);
    } else {
      return selectedChips === label;
    }
  };

  return (
    <View style={styles.chipGroup}>
      {options.map((option, index) => (
        <Chip
          key={index}
          text={option.text}
          colors={option.colors}
          selected={isSelected(option.type)}
          onPress={() => handlePressChip(option.type)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  chipGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default ChipGroup;
