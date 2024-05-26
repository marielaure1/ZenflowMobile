import { StyleSheet } from 'react-native';
import variables from '@theme/theme.variables';
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: "#FFF"
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      error: {
        color: 'red',
        marginBottom: 10,
      },
      input: {
        borderBottomWidth: 1,
        borderColor: '#0c0c0c',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
      },
      forgotPassword: {
        color: '#007bff', // Bleu primaire
        textAlign: 'center',
      },
});
  
export default styles;