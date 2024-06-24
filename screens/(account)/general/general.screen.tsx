import React from 'react';
import { ScrollView,Text, View, FlatList } from 'react-native';
import useGeneral from "@screens/(account)/general/general.hook";
import Banner from "@/components/banner/banner";
import FetchPending from '@/components/fetch-pending/fetch-pending';
import FieldControl from '@/components/fields/field-control';
import Regex from "@constants/regex";
import Template from '@/components/layout/template/template';
import Button from '@/components/buttons/button';
import TabsViewBasic from '@/components/tabs-view/basic/tabs-view-basic';

const GeneralScreen: React.FC = () => {
  const {
    me, 
    controlProfil, 
    handleSubmitProfil, 
    errorsProfil,
    controlPassword,
    handleSubmitPassword,
    errorsPassword,
    validatePasswordConfirm,
    controlEmail, 
    handleSubmitEmail, 
    errorsEmail,
    handleUpdateProfil,
    handleUpdatePassword,
    handleUpdateEmail,
    currentTab, 
    setCurrentTab,
    tabs, 
    setTabs
   } = useGeneral();

  return (
    <Template>
      <Banner title={"Générale"}/>
      {/* {(error || isLoading) && (<FetchPending isLoading={isLoading} error={error} type="Not Found"/>) } */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tabs && tabs.map((tab, key) => (
          <TabsViewBasic key={key} view={currentTab} setView={setCurrentTab} data={tab} colors={{ background: tab?.background, foreground: tab?.foreground }} />
        ))}
      </ScrollView>
      <View className="flex-col gap-md">
        {currentTab == 1 && (
        <View className="flex-col gap-sm">
          <FieldControl 
          control={controlProfil} 
          name="lastName" 
          label="Nom" 
          error={errorsProfil.lastName} 
          rules={{ 
            required: 'Ce champ est requis'
          }} />

          <FieldControl 
          control={controlProfil} 
          name="firstName" 
          label="Prénom" 
          error={errorsProfil.firstName} 
          rules={{ 
            required: 'Ce champ est requis'
          }} />

          <Button text="Modifier" type="primary" action={handleSubmitProfil(handleUpdateProfil)} />
        </View>
        )}

        {currentTab == 2 && (
        <View className="flex-col gap-sm">

        <FieldControl 
          control={controlEmail} 
          name="email" 
          label="Email" 
          error={errorsEmail.email} 
          rules={{ 
            required: 'Ce champ est requis',
            pattern: {
                value: Regex.email,
                message: 'Veuillez saisir un email valide'
            }
          }} />
          <Button text="Modifier" type="primary" action={handleSubmitEmail(handleUpdateEmail)} />
        </View>
        )}

        {currentTab == 3 && (
        <View className="flex-col gap-sm">

          <FieldControl 
          control={controlPassword} 
          name="password" 
          label="Mot de passe" 
          error={errorsPassword.password} 
          secureTextEntry={true}
          rules={{ 
            required: 'Ce champ est requis', 
            minLength: { 
              value: 8,
              message: 'Le mot de passe doit contenir au moins 8 caractères'
            },
            maxLength: {
                value: 25,
                message: 'Le mot de passe ne peut pas dépasser 25 caractères'
            },
            pattern: {
                value: Regex.password,
                message: 'Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un nombre et un symbole (@, $, !, %, *, ?, &)'
            }
          }} />
          
          <FieldControl 
          control={controlPassword} 
          name="passwordConfirm" 
          label="Confirmer le mot de passe" 
          error={errorsPassword.passwordConfirm} 
          secureTextEntry={true}
          rules={{ 
            required: 'Ce champ est requis',
            validate: validatePasswordConfirm
          }} />

          <Button text="Modifier" type="primary" action={handleSubmitPassword(handleUpdatePassword)} />
        </View>
        )}
      </View>
    </Template>
  );
}

export default GeneralScreen;