import { Add, Layer, Trash } from 'iconsax-react-native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useProspectsApi } from '@/api/api';


const FabsProspect = ({prospect}) => {
  const [state, setState] = React.useState({ open: false });
  const navigation = useNavigation();
  const onStateChange = ({ open }) => setState({ open });
  const prospectsApi = useProspectsApi();

  const { open } = state;

  const handleDelete = async () => {
    try {
      const deletedProspect = await prospectsApi.delete(prospect._id);
      console.log(deletedProspect);

      navigation.navigate("Prospects")
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
          <FAB.Group
            open={open}
            visible
            icon={() => open ? (<Layer size="24" color="#6E69F4"/>) : (<Layer size="24" color="#6E69F4"/>) }
            fabStyle={styles.btn} 
            actions={[
              {
                icon: () => <Add size="24" color="#FFC045"/>,
                label: 'Modifier le prospect',
                style: [styles.btnAction, styles.btnActionOrange],
                onPress: () =>  navigation.navigate("ProspectPost", {prospect: prospect}),
                
              },
              {
                icon: () => <Trash size="24" color="#FD4949"/>,
                label: 'Supprimer le prospect',
                style: [styles.btnAction, styles.btnActionRed],
                onPress: () => handleDelete(),
                
              },
              {
                icon: () => <Add size="24" color="#FFC045"/>,
                label: 'Gérer les champs personnalisés',
                style: [styles.btnAction, styles.btnActionOrange],
                onPress: () =>  navigation.navigate("CustomFieldManage", {prospect: prospect}),
                
              }
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
              }
            }}
            // style={[styles.fab, open ? {backgroundColor: "#000000"} : {backgroundColor:"transparent", height}]}
          />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  btn:{
    backgroundColor: "#E7E6FF",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAction:{
    backgroundColor: "#CEF0FF",
    borderRadius: 40,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "transparant",
    elevation: 0,
    shadowOffset: {width: 0, height: 0}
  },
  btnActionRed:{
    backgroundColor: "#FFE1E1",
  },
  btnActionOrange:{
    backgroundColor: "#FFF0D5",
  }
});

export default FabsProspect;

