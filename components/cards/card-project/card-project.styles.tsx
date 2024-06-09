import { StyleSheet } from 'react-native';
import getTheme from '@theme/theme.colors';
import getVariables from '@theme/theme.variables';

export default function useStyles(){
  const variables = getVariables();
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: "#FFFFFF",
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "center",
      gap: 10,
      borderRadius: 10,
      width: "50%",
      marginHorizontal: 5,
    },
    full: {
      width: '100%',
      flexDirection: "row"
    },
    marginBottom: {
      marginVertical: 20
    },
    textDate: {
      fontSize: 12,
      fontWeight: 400, 
      color: "#989BA5"
    },
    textName: {
      fontSize: 14,
      fontWeight: 400, 
      color: "#18181B"
    },
    bgIcon: {
      width: 30,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      borderRadius: 5
    }
  });
  
  return styles;
}