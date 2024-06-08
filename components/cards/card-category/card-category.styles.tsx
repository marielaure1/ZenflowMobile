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
      width: 124,
      height: 80,
      marginHorizontal: 10
    },
    marginBottom: {
      marginVertical: 20
    },
    text: {
      fontSize: 14,
      fontWeight: 500
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