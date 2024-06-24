import React, { useRef } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useTasks from '@screens/(common)/custom-field-post/custom-field-post.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import Button from '@components/buttons/button';
import ChipGroup from '@/components/chip/chip-group';
import FieldControl from '@/components/fields/field-control';
import CustomFieldEnum from '@/common/enums/custom-field.enum';

const CustomFieldPostScreen = ({ route }) => {
  const { control, selectedType, item, tabs, setTabs, title, errors, handleCreate, handleUpdate, handleSubmit } = useTasks({ route });

console.log(item);
console.log(item?.options);

  return (
    <>    
      <Template>
        <Banner title={title} btnBack/>
        <View className='flex-col gap-md'>
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
            item={item}
             />

            <FieldControl 
            control={control} 
            name="type" 
            label="Type de champ" 
            error={errors.type} 
            type="chips"
            defaultSelected={[item?.type]}
            options={[
              { type: CustomFieldEnum.TEXT, text: "Texte", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
              { type: CustomFieldEnum.NUMBER, text: "Nombre", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
              { type: CustomFieldEnum.SELECT, text: "Sélection", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
              { type: CustomFieldEnum.SELECT_MULTIPLE, text: "Sélection multiple", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
              { type: CustomFieldEnum.DATE, text: "Date", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
            ]}
            item={item}
             />

             {selectedType == CustomFieldEnum.NUMBER && (
                <FieldControl 
                control={control} 
                name="options" 
                label="Options" 
                error={errors.options} 
                type="chips"
                defaultSelected={[item?.options ? item?.options[0] : CustomFieldEnum.NUMBER]}
                options={[
                  { type: "number", text: "Nombre", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
                  { type: "bar", text: "Barre", colors: { background: "#CEF0FF", foreground: "#38BDF8" } }
                ]}
                item={item}
                />
             )}

            {selectedType == CustomFieldEnum.SELECT && (
                <FieldControl 
                control={control} 
                name="options" 
                label="Options" 
                error={errors.options} 
                type="chips-edit"
                item={item}
                />
             )}

            {selectedType == CustomFieldEnum.SELECT_MULTIPLE && (
                <FieldControl 
                control={control} 
                name="options" 
                label="Options" 
                error={errors.options} 
                type="chips-edit"
                item={item}
                />
             )}

          
     
          <Button text="Valider" type="blue" action={handleSubmit(route?.params?.item ? handleUpdate : handleCreate)} />
        </View>
      </Template>
    </>
  );
};

export default CustomFieldPostScreen;
