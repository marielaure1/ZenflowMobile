import React, { useRef } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useTasks from '@screens/(clients)/client-post/client-post.hook';
import useStyles from '@/screens/(clients)/client-post/client-post.styles';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import Button from '@components/buttons/button';
import ChipGroup from '@components/chip/chip-group';
import FieldControl from '@components/fields/field-control';
import Regex from "@constants/regex";

const ClientPostScreen = ({ route, navigation }) => {
  const styles = useStyles();
  const { control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit } = useTasks({ route });


  console.log(route?.params?.client);
  

const handleChipChange = (selected: string[]) => {
  console.log('Selected Chips:', selected);
};

  return (
    <>    
      <Template>
        <Banner title={title} />
        <View style={styles.container}>
          <FieldControl 
            control={control} 
            name="society" 
            label="Société" 
            error={errors.society} 
             />

          <FieldControl 
            control={control} 
            name="lastName" 
            label="Nom" 
            error={errors.lastName} 
            rules={{ 
              required: 'Ce champ est requis'
            }} />

          <FieldControl 
            control={control} 
            name="firstName" 
            label="Prénom" 
            error={errors.firstName} 
            rules={{ 
              required: 'Ce champ est requis'
            }} />    
            
            <FieldControl 
            control={control} 
            name="email" 
            label="Email" 
            error={errors.email} 
            rules={{ 
              required: 'Ce champ est requis',
              pattern: {
                value: Regex.email,
                message: 'Veuillez saisir un email valide'
              }
            }} />
            
            <FieldControl 
            control={control} 
            name="phone" 
            label="Téléphone" 
            error={errors.phone} 
            rules={{ 
              required: 'Ce champ est requis'
            }} />
            
            <FieldControl 
            control={control} 
            name="address" 
            label="Adresse" 
            error={errors.address} 
            rules={{ 
              required: 'Ce champ est requis'
            }} />
                
            <FieldControl 
            control={control} 
            name="status" 
            label="Statut" 
            error={errors.status} 
            rules={{ 
              required: 'Ce champ est requis'
            }} />

          {/* <View style={styles.formGroup}>
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
          </View> */}
          
          <Button text="Valider" type="primary" action={handleSubmit(route?.params?.client ? handleUpdate : handleCreate)} />
        </View>
      </Template>
    </>
  );
};

export default ClientPostScreen;
