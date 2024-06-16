import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import styles from '@/components/fields/field.styles';
import ChipGroup from '@components/chip/chip-group';

const FieldControl = ({ control, name, label, error, defaultSelected = [], rules = {}, defaultrules = {}, type = "input", placeholder = "", options = [], ...props }) => {

  const handleChipChange = (selected: string[]) => {
    console.log('Selected Chips:', selected);
  };
  
    return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{label} {rules?.required ? "*" : ""}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (

          <>
            {type == "input" && (
              <TextInput
                 style={styles.input}
                 placeholder={placeholder || label}
                 onBlur={onBlur}
                 onChangeText={onChange}
                 value={value}
                 {...props}
               />
            )}

            {type == "chips" && (
              <ChipGroup
                defaultSelected={defaultSelected}
                options={options}
                multiple={false}
                onChange={handleChipChange}
              />
            )}
          </>
        )}
      />
      {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
    </View>
  );
};

export default FieldControl;
