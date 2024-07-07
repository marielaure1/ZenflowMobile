import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import styles from '@/components/fields/field.styles';
import ChipGroup from '@components/chip/chip-group';
import ChipEditGroup from '@components/chip-edit/chip-edit-group';
import { DatePickerModal } from 'react-native-paper-dates';

const FieldControl = ({ control, name, label = "", error, item = {}, defaultSelected = [], rules = {}, defaultrules = {}, type = "input", placeholder = "", options = [], className = "", ...props }) => {
  const [open, setOpen] = useState(false);

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
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            {type === "input" && (
              <TextInput
                className={`${className} bg-base-0 text-zinc-900 rounded-sm px-[10px] py-[15px] `}
                placeholder={placeholder || label}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                {...props}
              />
            )}

            {type === "chips" && (
              <ChipGroup
                defaultSelected={defaultSelected}
                options={options}
                multiple={false}
                onChange={onChange}
              />
            )}

            {type === "chips-edit" && (
              <ChipEditGroup
                options={options}
                onChange={onChange}
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
          </>
        )}
      />
      {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
    </View>
  );
};

export default FieldControl;
