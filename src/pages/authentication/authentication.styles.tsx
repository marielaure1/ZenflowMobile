import { StyleSheet } from 'react-native';
import getTheme from '@/src/theme/theme.colors';
import variables from '@/src/theme/theme.variables';

export default function useStyles(){
  
  const styles = StyleSheet.create({
    container: {
      // padding: getColor('paddingPrimary'),
      zIndex: 3,
      backgroundColor: getTheme("header")["background"],
      // justifyContent: 'center',
      width: variables.width,
      height: variables.height
    },
    marginBottom: {
      marginVertical: 20,
    },
  });
  return styles;
}