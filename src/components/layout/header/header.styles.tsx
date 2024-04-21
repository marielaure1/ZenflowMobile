import { StyleSheet } from 'react-native';
import getTheme from '@/src/theme/theme.colors';
import getVariables from '@/src/theme/theme.variables';

export default function useStyles(){
  const variables = getVariables();
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: variables.width,
      padding: variables.common.padding["10"],
      zIndex: 3,
      backgroundColor: getTheme("header")["background"],
      flexDirection: 'row',
    },
    marginBottom: {
      marginVertical: 20
    },
    burger: {
      width: 28,
      height: 28
    }
  });
  
  return styles;
}