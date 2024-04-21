import { StyleSheet } from 'react-native';
import {colors} from '@theme/theme.colors';
import variables from '@/src/theme/theme.variables';

export default function useStyles(){
  
  const styles = StyleSheet.create({
    flag: {
      fontFamily: 'Poppins-Medium',
      fontSize: 12,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      textAlign: "center"
    }
  });
  return styles;
}