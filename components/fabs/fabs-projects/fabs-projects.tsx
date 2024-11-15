import { Add, Layer } from 'iconsax-react-native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const FabsProjects = () => {
  const [state, setState] = React.useState({ open: false });
  const navigation = useNavigation();
  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
          <FAB.Group
            open={open}
            visible
            icon={() => open ? (<Layer size="24" color="#6E69F4"/>) : (<Layer size="24" color="#6E69F4"/>) }
            fabStyle={styles.btn} 
            actions={[
              {
                icon: () => <Add size="24" color="#38BDF8"/>,
                label: 'Créer un projet',
                style: [styles.btnAction],
                onPress: () =>  {console.log("ProjectPost"); navigation.navigate("ProjectPost");},
                
              },
              {
                icon: () => <Add size="24" color="#38BDF8"/>,
                label: 'Créer un champ',
                style: [styles.btnAction],
                onPress: () => console.log('Pressed email'),
              },
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
    shadowColor: "transparant"

  }
});

export default FabsProjects;

