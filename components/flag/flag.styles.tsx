import { StyleSheet } from 'react-native';
import {colors} from '@theme/theme.colors';
import variables from '@theme/theme.variables';

export default function useStyles(){
  
  const styles = StyleSheet.create({
    flag: {
      fontFamily: 'Poppins-Medium',
      fontSize: 12,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      textAlign: "center",
      alignSelf: "flex-start",
      marginRight: 5
    }
  });
  return styles;
}