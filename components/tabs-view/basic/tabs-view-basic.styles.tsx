import { StyleSheet } from 'react-native';
import getTheme from '@theme/theme.colors';
import getVariables from '@theme/theme.variables';

export default function useStyles(){
  const variables = getVariables();
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: "#FFFFFF",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center",
      gap: 10,
      borderRadius: 10,
      marginHorizontal: 5,
      borderWidth: 2,
      borderColor: "#FFFFFF"
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
    },
  });
  
  return styles;
}