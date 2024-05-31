import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '@/components/fields/field.styles';

const Field = ({ get, set, name, type = "input", placeholder = "", ...props }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{name.toUpperCase()}</Text>

            {type === "input" && (
                <TextInput
                    style={styles.input}
                    placeholder={placeholder ? placeholder : name}
                    value={get}
                    onChangeText={set}
                    {...props} // Correctly spreading additional props
                />
            )}
        </View>
    );
}

export default Field;
