import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import ChipEdit from '@components/chip-edit/chip-edit';
import ButtonIcon from '@components/buttons/button-icon';

interface ChipOption {
  text: string;
}

interface ChipEditGroupProps {
  options: ChipOption[];
  item?: Array<Object>;
  onChange?: (selected: ChipOption[]) => void;
}

const ChipEditGroup: React.FC<ChipEditGroupProps> = ({ options, item, onChange }) => {
  const [chips, setChips] = useState(item?.options ? item.options : []);
  const [editingChip, setEditingChip] = useState<string | null>(null);
  const [newChipText, setNewChipText] = useState('');
  const [editChipText, setEditChipText] = useState<string>('');
  
  useEffect(() => {
    if (onChange) {
      onChange(chips);
    }
  }, [chips]);

  const handleDeleteChip = (text: string) => {
    if(chips){
      setChips(chips.filter(chip => chip.text !== text));
    }
    
  };

  const handleEditChip = (text: string) => {
    if (editChipText.trim() === '') return;
    if(chips){
      const updatedChips = chips.map(chip => chip.text === text ? { ...chip, text: editChipText } : chip);
      setChips(updatedChips);
      setEditingChip(null);
      setEditChipText('');
    }
    
  };

  const handleAddChip = () => {
    if (newChipText.trim() === '') return;
    const newChip = { text: newChipText };
    setChips([...chips, newChip]);
    setNewChipText('');
  };

  return (
    <View className='flex-col gap-md'>
      <View className="p-[15px] w-full flex-row justify-between items-center gap-md rounded-[15px] bg-base-0">
        <TextInput
          className="text-zinc-900"
          value={newChipText}
          onChangeText={setNewChipText}
          placeholder="Titre de l'option"
        />
        <ButtonIcon text="Add" type="primary" icon="Add" action={handleAddChip} />
      </View>
      {chips && chips.map((chip, index) => (
        <View key={index} style={styles.chipContainer}>
          {editingChip === chip.text ? (
            <View className="p-[15px] w-full flex-row justify-between items-center gap-md rounded-[15px] bg-base-0">
              <TextInput
                className="text-zinc-900 w-[70%]"
                value={editChipText}
                onChangeText={setEditChipText}
              />
              <View className={`flex-row gap-sm`}>
                <ButtonIcon text="Edit" type="primary" icon="TickSquare" action={() => handleEditChip(chip.text)} />
                <ButtonIcon text="Cancel" type="primary" icon="Back" action={() => setEditingChip(null)} />
              </View>
            </View>
          ) : (
            <ChipEdit
              chip={chip}
              selected={false} 
              onPress={() => {
                setEditingChip(chip.text);
                setEditChipText(chip.text);
              }}
              handleDeleteChip={() => handleDeleteChip(chip.text)}
              setEditingChip={() => {
                setEditingChip(chip.text);
                setEditChipText(chip.text);
              }}
            />
          )}
        </View>
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
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  addChipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
  },
});

export default ChipEditGroup;
