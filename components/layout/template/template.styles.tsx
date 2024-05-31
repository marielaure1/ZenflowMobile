import { StyleSheet } from 'react-native';
import getVariables from '@theme/theme.variables';

export default function useStyles(){
  const variables = getVariables();
  
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 50
    },
    scrollView: {
      height: variables.height
    }
  });
  
  return styles;
}