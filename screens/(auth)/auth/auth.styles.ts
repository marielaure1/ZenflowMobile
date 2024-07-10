import { StyleSheet } from 'react-native';
import variables from '@theme/theme.variables';
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      width: 100,
      height: 100,
      marginBottom: 20,
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 30,
    }
});
  
export default styles;