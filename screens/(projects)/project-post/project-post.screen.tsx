import React, { useRef } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useTasks from '@screens/(projects)/project-post/project-post.hook';
import useStyles from '@screens/(projects)/project-post/project-post.styles';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import Button from '@components/buttons/button';
import ChipGroup from '@/components/chip/chip-group';

const ProjectPostScreen = ({ route }) => {
  const styles = useStyles();
  const { tabs, setTabs, title, handleInputChange, handleSubmit, form } = useTasks({ route });
console.log("<form", form);

const handleChipChange = (selected: string[]) => {
  console.log('Selected Chips:', selected);
};

  return (
    <>    
      <Template>
        <Banner title={title} />
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleInputChange('name', value)}
            value={form.name}
            placeholder="Titre du projet"
          />
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleInputChange('description', value)}
            value={form.description}
            placeholder="Description"
          />

          <View style={styles.formGroup}>
              <Text style={styles.label}>Priorité</Text>
              <View style={styles.flex}>
              <ChipGroup
                options={[
                  { text: "Basse", colors: {"background": "#CEF0FF", "foreground": "#38BDF8"} }, 
                  { text: "Moyen", colors: {"background": "#E6F4F1", "foreground": "#34A853"} }, 
                  { text: "Elevé", colors: {"background": "#FFF9ED", "foreground": "#FFC045"} }, 
                  { text: "Urgent", colors: {"background": "#FFE1E1", "foreground": "#FD4949"} }
                ]}
                multiple={false}
                onChange={handleChipChange}
              />
                
              </View>
          </View>
          <Button text="Valider" type="blue" action={handleSubmit} />
        </View>
      </Template>
    </>
  );
};

export default ProjectPostScreen;
