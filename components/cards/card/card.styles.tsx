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
      gap: 10,
      borderRadius: 20,
      width: "100%"
    },
    marginBottom: {
      marginVertical: 20
    }
  });
  
  return styles;
}