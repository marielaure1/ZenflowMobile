import React, { useRef } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useTasks from '@/screens/(projects)/task-post/task-post.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import Button from '@components/buttons/button';

const TaskPostScreen = ({ route }) => {
  const { tabs, setTabs, title, handleInputChange, handleSubmit, form } = useTasks({ route });
console.log(form);

  return (
    <>    
      <Template>
        <Banner title={title} />
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleInputChange('title', value)}
            value={form.title}
            placeholder="Titre de la tâche"
          />
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleInputChange('description', value)}
            value={form.description}
            placeholder="Description"
          />
           <TextInput
            style={styles.input}
            onChangeText={(value) => handleInputChange('status', value)}
            value={form.status}
            placeholder="Status"
          />
          <Button text="Valider" type="blue" action={handleSubmit} />
        </View>
      </Template>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default TaskPostScreen;
