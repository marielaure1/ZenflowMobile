import { StyleSheet } from 'react-native';
import variables from '@theme/theme.colors';

const styles = StyleSheet.create({
    button: {
        width: "100%",
        paddingVertical: variables.paddingSecondary,
        paddingHorizontal: variables.paddingTerciary,
        borderRadius: variables.brTerciary,
    
    },
    buttonText: {   
        textAlign: "center"
    },
    buttonBgPurple: {
        backgroundColor: variables.clPurple
    }, 
    buttonClPurple: {
        color: variables.clWhite
    }, 
    buttonBgBlack: {
        backgroundColor: variables.clBlack
    },
    buttonClBlack: {
        color: variables.clWhite
    }
});
  
export default styles;