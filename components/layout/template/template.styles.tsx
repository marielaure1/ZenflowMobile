import { StyleSheet } from 'react-native';
import getVariables from '@/src/theme/theme.variables';

export default function useStyles(){
  const variables = getVariables();
  
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 20
    },
    scrollView: {
      height: variables.height
    }
  });
  
  return styles;
}