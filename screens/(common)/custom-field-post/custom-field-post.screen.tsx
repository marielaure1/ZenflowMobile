import React, { useRef } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useTasks from '@screens/(common)/custom-field-post/custom-field-post.hook';
import useStyles from '@screens/(common)/custom-field-post/custom-field-post.styles';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import Button from '@components/buttons/button';
import ChipGroup from '@/components/chip/chip-group';
import FieldControl from '@/components/fields/field-control';
import CustomFieldEnum from '@/common/enums/custom-field.enum';

const CustomFieldPostScreen = ({ route }) => {
  const styles = useStyles();
  const { control, tabs, setTabs, title, errors, handleCreate, handleSubmit, form } = useTasks({ route });


  return (
    <>    
      <Template>
        <Banner title={title} />
        <View style={styles.container}>
          {/* <TextInput
            style={styles.input}
            onChangeText={(value) => handleInputChange('name', value)}
            value={form.name}
            placeholder="Titre du champ"
          /> */}

            <FieldControl 
            control={control} 
            name="name" 
            label="Titre du champ" 
            error={errors.name} 
            type="input"
             />

            <FieldControl 
            control={control} 
            name="type" 
            label="Type de champ" 
            error={errors.type} 
            type="chips"
            defaultSelected={[CustomFieldEnum.TEXTE]}
            options={[
              { type: CustomFieldEnum.TEXTE, text: "Texte", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
              { type: CustomFieldEnum.NUMBER, text: "Nombre", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
              { type: CustomFieldEnum.SELECT, text: "Sélection", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
              { type: CustomFieldEnum.SELECT_MULTIPLE, text: "Sélection multiple", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
              { type: CustomFieldEnum.FLAG, text: "Etiquette", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
              { type: CustomFieldEnum.DATE, text: "Date", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
            ]}
             />

          
     
          <Button text="Valider" type="blue" action={handleSubmit(handleCreate)} />
        </View>
      </Template>
    </>
  );
};

export default CustomFieldPostScreen;
