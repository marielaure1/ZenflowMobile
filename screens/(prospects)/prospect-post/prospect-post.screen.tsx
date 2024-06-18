import React, { useRef } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useTasks from '@screens/(prospects)/prospect-post/prospect-post.hook';
import useStyles from '@/screens/(prospects)/prospect-post/prospect-post.styles';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import Button from '@components/buttons/button';
import ChipGroup from '@components/chip/chip-group';
import FieldControl from '@components/fields/field-control';
import Regex from "@constants/regex";

const ProspectPostScreen = ({ route, navigation }) => {
  const styles = useStyles();
  const { control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit } = useTasks({ route });


  console.log(route?.params?.prospect);
  

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

            <FieldControl 
            control={control} 
            name="lastContactDate" 
            label="Dernier contact" 
            error={errors.lastContactDate} 
            type="date"
          />
            
            <FieldControl 
            control={control} 
            name="marketSegment" 
            label="Segment de marché" 
            error={errors.marketSegment}  />
            
            <FieldControl 
            control={control} 
            name="needs" 
            label="Besoins" 
            error={errors.needs}  />
            
            <FieldControl 
            control={control} 
            name="leadSource" 
            label="Source" 
            error={errors.leadSource} />
            
            <FieldControl 
            control={control} 
            name="companySize" 
            label="Taille" 
            error={errors.companySize} 
             />
            
            <FieldControl 
            control={control} 
            name="estimatedBudget" 
            label="Budget estimé" 
            error={errors.estimatedBudget} 
            />

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
          
          <Button text="Valider" type="primary" action={handleSubmit(route?.params?.prospect ? handleUpdate : handleCreate)} />
        </View>
      </Template>
    </>
  );
};

export default ProspectPostScreen;
