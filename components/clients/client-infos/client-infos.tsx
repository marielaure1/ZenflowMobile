import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../cards/card/card'; 
import useStyles from '@components/clients/client-infos/client-infos.styles';

const ClientInfos = ({ client, customFields }) => {
  const styles = useStyles();
console.log(customFields);

  return (
    <>
      <View style={{ padding: 10 }}>
        <Card>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Société:</Text>
            <Text style={styles.value}>{client?.society}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Prénom:</Text>
            <Text style={styles.value}>{client?.firstName}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Nom:</Text>
            <Text style={styles.value}>{client?.lastName}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{client?.email}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Téléphone:</Text>
            <Text style={styles.value}>{client?.phone}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Adresse:</Text>
            <Text style={styles.value}>{client?.address}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Statut:</Text>
            <Text style={styles.value}>{client?.status}</Text>
          </View>
        </Card>
      </View>
      <View style={{ padding: 10 }}>
        <Card>

          {customFields && customFields.map((customField, key) => (
            <View style={styles.formGroup} key={key}>
              <Text style={styles.label}>{customField?.name}:</Text>
              {customField?.type == "text" && (
                <Text style={styles.value}>{customField?.society}</Text>
              )}
              
            </View>
          ))}
        </Card>
      </View>
    </>
  );
};

export default ClientInfos;
