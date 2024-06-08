import { StyleSheet } from 'react-native';
import getTheme from '@theme/theme.colors';
import getVariables from '@theme/theme.variables';

export default function useStyles(){
  const variables = getVariables();
  
  const styles = StyleSheet.create({
    container: {
      padding: variables.common.padding["10"],
      backgroundColor: "#F4F4F4",
      flexDirection: 'column',
      gap: 10,
      borderRadius: 10
    },
    marginBottom: {
      marginVertical: 20
    }
  });
  
  return styles;
}