import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import { DatePickerModal, SingleDatePicker } from 'react-native-paper-dates';
import Card from '../cards/card/card'; 
import { useProjectsApi } from '@api/api';
import ChipGroup from '../chip/chip-group';
import Flag from '../flag/flag';
import useStyles from "@components/projects/project-infos.styles";
import ButtonIcon from '../buttons/button-icon';


const ProjectInfos = ({ project }) => {
  const styles = useStyles();
  const projectsApi = useProjectsApi();

  const [editingField, setEditingField] = useState<string | null>(null);
  const [editedValues, setEditedValues] = useState({
    name: project.name,
    description: project.description,
    ownerId: project.ownerId,
    priority: project.priority,
    dueDate: project.dueDate ? new Date(project.dueDate) : undefined, 
  });

  // Date Picker State (for react-native-paper-dates)
  const [date, setDate] = useState(editedValues.dueDate);
  const [open, setOpen] = useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
      handleInputChange('dueDate', params.date); 
    },
    [setOpen, setDate]
  );

  const handleEditClick = (field: string) => {
    setEditingField(field);
  };

  const handleCancelClick = () => {
    setEditingField(null);
  };

  const handleSaveClick = async () => {
    console.log('editedValues', editedValues);
    try {
      await projectsApi.update(project._id, editedValues);
    } catch (error) {
      console.log(error);
    }
    setEditingField(null);
  };

  const handleInputChange = (field: string, value: string | Date | null) => {
    setEditedValues({ ...editedValues, [field]: value });
  };

  const handleChipChange = (value: string) => {
    setEditedValues({ ...editedValues, priority: value });
  };

  const renderField = (type: string, field: string, label: string) => {
    return (
      <View style={styles.formGroup}>
        <View style={[styles.labelGroup]}>
          <Text style={styles.label}>{label}</Text>
          <View style={[styles.labelGroup]}>
            {editingField === field ? (
              <>
                <ButtonIcon icon="TickSquare" action={() => handleSaveClick()} />
                <ButtonIcon icon="Back" action={handleCancelClick} />
              </>
            ) : (
              <ButtonIcon icon="Magicpen" action={() => handleEditClick(field)} />
            )}
          </View>
        </View>
        {editingField === field ? (
          <>
            {type === "input" && (
              <TextInput
                style={[styles.input]}
                value={editedValues[field]}
                onChangeText={(value) => handleInputChange(field, value)}
              />
            )}
            {type === "chips" && (
              <ChipGroup
                options={[
                  { text: "Basse", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
                  { text: "Moyen", colors: { background: "#E6F4F1", foreground: "#34A853" } },
                  { text: "Elevé", colors: { background: "#FFF9ED", foreground: "#FFC045" } },
                  { text: "Urgent", colors: { background: "#FFE1E1", foreground: "#FD4949" } },
                ]}
                multiple={false}
                onChange={handleChipChange}
              />
            )}
            {type === "date" && (
              <PaperProvider> 
                {/* <SingleDatePicker
                  date={date}
                  onDismiss={onDismissSingle}
                  onConfirm={onConfirmSingle}
                  // validRange={{
                  //   startDate: new Date(), 
                  // }}
                /> */}

              <DatePickerModal
                locale="en"
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={date}
                onConfirm={onConfirmSingle}
              />
                <Button onPress={() => setOpen(true)}>Pick date</Button>
              </PaperProvider>
            )}
          </>
        ) : (
          <>
            {type === "input" && <Text>{editedValues[field]}</Text>}
            {type === "chips" && (
              <Flag text={editedValues[field]} colors={{ background: "#FFE1E1", foreground: "#FD4949" }} />
            )}
            {type === "date" && (
              <Text>{editedValues[field] ? editedValues[field].toLocaleDateString() : 'No due date set'}</Text>
            )}
          </>
        )}
      </View>
    );
  };

  return (
    <View style={{ paddingVertical: 10 }}>
      <Card>
        {renderField("input", 'name', 'Name')}
        {renderField("input", 'description', 'Description')}
        {renderField("chips", 'priority', 'Priority')}
        {renderField("date", 'dueDate', 'Due Date')}
      </Card>
    </View>
  );
};

export default ProjectInfos;
