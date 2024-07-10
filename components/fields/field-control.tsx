import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
import { DatePickerModal } from 'react-native-paper-dates';
import { IndexPath, Select, SelectItem } from '@ui-kitten/components';
import styles from '@/components/fields/field.styles';
import ChipGroup from '@components/chip/chip-group';
import ChipEditGroup from '@components/chip-edit/chip-edit-group';

const FieldControl = ({ 
  control, 
  name, 
  label = "", 
  error, 
  item = {}, 
  defaultSelected = [], 
  rules = {}, 
  defaultrules = {}, 
  type = "input", 
  placeholder = "", 
  options = [], 
  className = "", 
  multiline = false,
  ...props 
}) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  const onConfirm = (params, onChange) => {
    onChange(params.date);
    setOpen(false);
  };

  const onDismiss = () => {
    setOpen(false);
  };

  return (
    <View style={styles.formGroup}>
      {label && <Text style={styles.label}>{label} {rules?.required ? "*" : ""}</Text>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            {type === "input" && (
              <TextInput
                className={`${className} bg-base-0 text-zinc-900 rounded-sm px-[10px] py-[15px] `}
                placeholder={placeholder || label}
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                multiline={multiline}
                {...props}
              />
            )}

            {type === "chips" && (
              <ChipGroup
                defaultSelected={defaultSelected}
                options={options}
                multiple={false}
                onChange={(selected) => onChange(selected)}
              />
            )}

            {type === "chips-edit" && (
              <ChipEditGroup
                options={options}
                onChange={(selected) => onChange(selected)}
                item={item}
              />
            )}

            {type === "date" && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder={placeholder || label}
                  onFocus={() => setOpen(true)}
                  value={value ? value : ''}
                  {...props}
                />
                <DatePickerModal
                  mode="single"
                  visible={open}
                  onDismiss={onDismiss}
                  date={value ? new Date(value) : undefined}
                  onConfirm={(params) => onConfirm(params, onChange)}
                  locale="fr"
                />
              </>
            )}

            {type === "select" && (
              <Select
                selectedIndex={selectedIndex}
                value={options[selectedIndex.row]?.label}
                onSelect={(index) => {
                  setSelectedIndex(index);
                  onChange(options[index.row].value);
                }}
                style={{ height: 50, width: '100%' }}
              >
                {options.map((option, i) => (
                  <SelectItem key={i} title={option.label} />
                ))}
              </Select>
            )}
          </>
        )}
      />
      {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
    </View>
  );
};

export default FieldControl;
