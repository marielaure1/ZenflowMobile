import React from 'react';
import { View } from 'react-native';
import useTasks from '@screens/(prospects)/prospect-post/prospect-post.hook';
import useStyles from '@/screens/(prospects)/prospect-post/prospect-post.styles';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import Button from '@components/buttons/button';
import FieldControl from '@components/fields/field-control';
import Regex from "@constants/regex";
import StatusEnum from '@/common/enums/status.enum';

const ProspectPostScreen = ({ route, navigation }) => {
  const styles = useStyles();
  const { prospect, control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit } = useTasks({ route });

  return (
    <>    
      <Template>
        <Banner title={title} btnBack={true} />
        <View className='flex-col gap-md'>
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
            }}
          />

          <FieldControl 
            control={control} 
            name="firstName" 
            label="Prénom" 
            error={errors.firstName} 
            rules={{ 
              required: 'Ce champ est requis'
            }}
          />

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
            }}
          />

          <FieldControl 
            control={control} 
            name="phone" 
            label="Téléphone" 
            error={errors.phone} 
            rules={{ 
              required: 'Ce champ est requis'
            }}
          />

          <FieldControl 
            control={control} 
            name="address" 
            label="Adresse" 
            error={errors.address} 
            rules={{ 
              required: 'Ce champ est requis'
            }}
          />

          <FieldControl 
            control={control} 
            name="lastContactDate" 
            label="Date de dernier contact" 
            error={errors.lastContactDate}
            type='date' 
          />

          <FieldControl 
            control={control} 
            name="marketSegment" 
            label="Segment de marché" 
            error={errors.marketSegment} 
          />

          <FieldControl 
            control={control} 
            name="needs" 
            label="Besoins" 
            error={errors.needs} 
          />

          <FieldControl 
            control={control} 
            name="leadSource" 
            label="Source de lead" 
            error={errors.leadSource} 
          />

          <FieldControl 
            control={control} 
            name="companySize" 
            label="Taille de l'entreprise" 
            error={errors.companySize} 
          />

          <FieldControl 
            control={control} 
            name="estimatedBudget" 
            label="Budget estimé" 
            error={errors.estimatedBudget} 
          />
          
          <Button text="Valider" type="primary" action={handleSubmit(route?.params?.prospect ? handleUpdate : handleCreate)} />
        </View>
      </Template>
    </>
  );
};

export default ProspectPostScreen;
