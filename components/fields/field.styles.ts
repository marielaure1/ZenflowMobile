import { StyleSheet } from 'react-native';
import variables from '@theme/theme.variables';
  
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: "#FFF"
      },
      label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#0C0C0C"
      },
      input: {
        borderBottomWidth: 1,
        borderColor: '#0c0c0c',
        paddingVertical: 10,
        fontSize: 14,
      },
});
  
export default styles;