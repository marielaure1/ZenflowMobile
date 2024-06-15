import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import styles from '@/components/fields/field.styles';

const FieldControl = ({ control, name, label, error, rules = {}, type = "input", placeholder = "", ...props }) => {
    console.log(error);
    
    return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder || label}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...props}
          />
        )}
      />
      {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
    </View>
  );
};

export default FieldControl;
