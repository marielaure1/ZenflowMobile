import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Card from '@components/cards/card/card';
import { CustomField } from '@interfaces/clients.interface';
import useDateFormatter from '@hooks/useDateFormatter';
import statusList from "@constants/flags";
import Flag from '@components/flag/flag';
import FieldControl from '@components/fields/field-control';
import StatusEnum from '@enums/status.enum';
import Regex from "@constants/regex";

interface ClientInfosProps {
  client: {
    society?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    address?: string;
    status?: string;
    lastContactDate?: Date;
    marketSegment?: string;
    needs?: string;
    leadSource?: string;
    companySize?: string;
    estimatedBudget?: number;
  };
  customFields?: CustomField[];
  customFieldsAll?: CustomField[];
  editingField: string | null;
  setEditingField: (field: string | null) => void;
  control: any;
  errors: any;
}

const ClientInfos: React.FC<ClientInfosProps> = ({ client, customFieldsAll, customFields, editingField, setEditingField, control, errors }) => {
  
  const status = statusList.filter((val) => val?.status.includes(client?.status));
  
  const renderField = ({name, label, type = 'input', options, rules, defaultSelected, item} : {name: string, label: string, type?: string, options?: any, rules?: object, defaultSelected?: any, item?: object}) => (
    <View className='flex-col gap-md'>
      <Text className='text-md font-[Poppins600]'>{label}:</Text>
      {editingField === name ? (
        <FieldControl
          control={control}
          name={name}
          placeholder={label}
          error={errors[name]}
          type={type}
          options={options}
          rules={rules}
          defaultSelected={defaultSelected}
          item={item}
          className="py-[0px] !bg-blue-500 bg-green-500"
          onBlur={() => setEditingField(null)}
        />
      ) : (
        <>
          {type === "input" && (
            <TouchableOpacity onPress={() => setEditingField(name)}>
              <Text>{client ? client[name] : ''}</Text>
            </TouchableOpacity>
          )}
          
          {name === "status" && (
             <Flag onPress={() => {console.log("eeeeeee"); setEditingField(name);} } text={status[0].text} colors={{ background: status[0].background, foreground: status[0].foreground }} />
          )}
        </>
      )}
    </View>
  );

  return (
    <View className='flex-col gap-xl'>
      <Card className='gap-xl'>
        {renderField({
          name: 'society', 
          label: 'Société'
        })}
        {renderField({
          name: 'firstName', 
          label: 'Prénom',
          rules: { 
            required: 'Ce champ est requis'
          }
        })}
        {renderField({
          name: 'lastName', 
          label: 'Nom',
          rules: { 
            required: 'Ce champ est requis'
          }
        })}
        {renderField({
          name: 'email', 
          label: 'Email', 
          type: 'text', 
          rules: { 
            required: 'Ce champ est requis',
            pattern: {
              value: Regex.email,
              message: 'Veuillez saisir un email valide'
            }
          }
        })}
        {renderField({
          name: 'phone', 
          label: 'Téléphone', 
          type: 'text', 
          rules: {
            pattern: {
              value: /^[0-9]+$/,
              message: 'Veuillez saisir un numéro de téléphone valide'
            }
          }
        })}
        {renderField({
          name: 'address', 
          label: 'Adresse',
          rules: { 
            required: 'Ce champ est requis'
          }
        })}
        {renderField({
          name: 'status', 
          label: 'Statut', 
          type: "chips",
          rules: { 
            required: 'Ce champ est requis'
          },
          defaultSelected: [client ? client?.status : StatusEnum.ACTIVE ],
          options: [
            { type: StatusEnum.ACTIVE, text: "Active", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
            { type: StatusEnum.INACTIVE, text: "Inactive", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
            { type: StatusEnum.SUSPENDED, text: "Suspendu", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
            { type: StatusEnum.PENDING, text: "En attente", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
            { type: StatusEnum.CALL_AGAIN, text: "A relancer", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
            { type: StatusEnum.LOST, text: "Perdu", colors: { background: "#CEF0FF", foreground: "#38BDF8" } },
          ],
          item: client
          })}
        {/* {client?.status && (
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Statut:</Text>
            <Flag text={status[0].text} colors={{ background: status[0].background, foreground: status[0].foreground }} />
          </View>
        )} */}

        {renderField({
          name: 'lastContactDate', 
          label: 'Date de dernier contact', 
          type: "date"
        })}

        {renderField({
          name: 'marketSegment', 
          label: 'Segment de marché'
        })}

        {renderField({
          name: 'needs', 
          label: 'Besoins'
        })}

        {renderField({
          name: 'leadSource', 
          label: 'Source de lead'
        })}

        {renderField({
          name: 'companySize', 
          label: 'Taille de l\'entreprise'
        })}

        {renderField({
          name: 'estimatedBudget', 
          label: 'Budget estimé', 
          type: "number"
        })}
        
      </Card>

      {customFieldsAll && customFieldsAll != "Not Found" && customFieldsAll?.length > 0 && (
          <Card>
            {customFieldsAll.map((customField, key) => (
              <View className='flex-col gap-md' key={key}>
                <Text className='text-md font-[Poppins600]'>{customField?.name}:</Text>
                {customField?.type === "text" && (
                  <Text className='text-md font-[Poppins400]'>{customField?.value}</Text>
                )}
                {customField?.type === "number" && (
                  <Text className='text-md font-[Poppins400]'>{customField?.value}</Text>
                )}
                {customField?.type === "select" && (
                  <Text className='text-md font-[Poppins400]'>{customField?.value}</Text>
                )}
              </View>
            ))}
          </Card>
        )}

        {customFields && customFields != "Not Found" && customFields?.length > 0 && (
          <Card>
            {customFields?.map((customField, key) => (
              <View className='flex-col gap-md' key={key}>
                <Text className='text-md font-[Poppins600]'>{customField?.name}:</Text>
                {customField?.type === "text" && (
                  <Text className='text-md font-[Poppins400]'>{customField?.value}</Text>
                )}
                {customField?.type === "number" && (
                  <Text className='text-md font-[Poppins400]'>{customField?.value}</Text>
                )}
                {customField?.type === "select" && (
                  <Text className='text-md font-[Poppins400]'>{customField?.value}</Text>
                )}
              </View>
            ))}
        </Card>
      )}
    </View>
  );
};

export default ClientInfos;
