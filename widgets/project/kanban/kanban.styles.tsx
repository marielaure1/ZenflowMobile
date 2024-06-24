import { StyleSheet } from 'react-native';
import {colors} from '@theme/theme.colors';
import variables from '@theme/theme.variables';

export default function useStyles(){
  
  const styles = StyleSheet.create({
    rowItem: {
      height: 100,
      alignItems: 'center',
      justifyContent: 'center', 
    },
    text: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    containerKanban:{
      flexDirection: "row"
    },
    section: {
      width: 300
    },
    sectionContent: {
      width: "90%"
    },
    textEmpty: {
      fontSize: 14,
      fontFamily: "Poppins600",
      textAlign: 'center',
    }
  });
  return styles;
}