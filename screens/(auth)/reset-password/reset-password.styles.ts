import { StyleSheet } from 'react-native';
import variables from '@theme/theme.variables';
  
const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        width: variables.innerWidth,
        height: variables.innerHeight,
        padding: variables.paddingPrimary
    },
    container: {
        padding: variables.paddingPrimary,
        zIndex: 3
    },
    marginBottom: {
        marginVertical: 20
    },
    inputField : {
        paddingVertical:  variables.paddingTerciary,
        paddingHorizontal:  variables.paddingPrimary,
        backgroundColor:  variables.clWhite,
        borderRadius:  variables.brTerciary,
        marginBottom: 20,
        color: variables.clBlack
    },
    containerOtp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        display: "flex",
        gap: 5,
        marginTop: 20
    },
    inputOtp: {
        width: '12%',
        borderWidth: 1,
        borderColor: variables.clWhite,
        borderRadius: 5,
        backgroundColor: "#FFFFFF16",
        color: variables.clWhite,
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 10
    },
    text: {
        color: variables.clWhite,
        marginTop: 20
    }
});
  
export default styles;