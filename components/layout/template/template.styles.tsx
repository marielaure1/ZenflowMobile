import { StyleSheet } from 'react-native';
import getVariables from '@theme/theme.variables';

export default function useStyles(){
  const variables = getVariables();
  
  const styles = StyleSheet.create({
    scrollView: {
      height: variables.height,
      backgroundColor: "#F4F7FE"
    }
  });
  
  return styles;
}