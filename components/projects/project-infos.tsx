import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Card from '../cards/card/card';
import { useProjectsApi } from '@api/api';

const ProjectInfos = ({ project }) => {
    const projectsApi = useProjectsApi();
  const [editingField, setEditingField] = useState(null);
  const [editedValues, setEditedValues] = useState({
    name: project.name,
    description: project.description,
    ownerId: project.ownerId,
    priority: project.priority,
  });

  const handleEditClick = (field) => {
    setEditingField(field);
  };

  const handleCancelClick = () => {
    setEditingField(null);
  };

  const handleSaveClick = async () => {
    console.log('editedValues', editedValues);
    
    try{
        const taskCategory = await projectsApi.update(project._id, editedValues);
        
        
      } catch(error){
        console.log(error);
        
      }
    setEditingField(null);
  };

  const handleInputChange = (field, value) => {
    setEditedValues({
      ...editedValues,
      [field]: value,
    });
  };

  const renderField = (field, label) => {
    if (editingField === field) {
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            value={editedValues[field]}
            onChangeText={(value) => handleInputChange(field, value)}
          />
          <View style={styles.buttonContainer}>
            <Button title="Save" onPress={() => handleSaveClick(field)} />
            <Button title="Cancel" onPress={handleCancelClick} />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text>{editedValues[field]}</Text>
        <Button title="Edit" onPress={() => handleEditClick(field)} />
      </View>
    );
  };

  return (
    <View style={{ paddingVertical: 10 }}>
      <Card>
        {renderField('name', 'Name')}
        {renderField('description', 'Description')}
        {renderField('priority', 'Priority')}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProjectInfos;
