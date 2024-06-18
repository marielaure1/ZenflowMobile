import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../cards/card/card'; 
import useStyles from '@components/prospects/prospect-infos/prospect-infos.styles';

const ProspectInfos = ({ prospect, customFields }) => {
  const styles = useStyles();
console.log(customFields);

  return (
    <>
      <View style={{ padding: 10 }}>
        <Card>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Société:</Text>
            <Text style={styles.value}>{prospect?.society}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Prénom:</Text>
            <Text style={styles.value}>{prospect?.firstName}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Nom:</Text>
            <Text style={styles.value}>{prospect?.lastName}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{prospect?.email}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Téléphone:</Text>
            <Text style={styles.value}>{prospect?.phone}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Adresse:</Text>
            <Text style={styles.value}>{prospect?.address}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Statut:</Text>
            <Text style={styles.value}>{prospect?.status}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Dernier contact:</Text>
            <Text style={styles.value}>{prospect?.lastContactDate}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Segment de marché:</Text>
            <Text style={styles.value}>{prospect?.marketSegment}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Besoins:</Text>
            <Text style={styles.value}>{prospect?.needs}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Source:</Text>
            <Text style={styles.value}>{prospect?.leadSource}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Taille:</Text>
            <Text style={styles.value}>{prospect?.companySize}</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Budget estimés:</Text>
            <Text style={styles.value}>{prospect?.estimatedBudget}</Text>
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

export default ProspectInfos;
