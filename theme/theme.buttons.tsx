import { StyleSheet } from 'react-native';
import { colors } from '@theme/theme.colors';

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 8,
        width: '100%',
        marginBottom: 10,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonIcon: {
        width: 40,
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        textAlign: "center",
        fontSize: 14
    },
    buttonAccount: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor:'transparant',
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'space-between'
    },
    buttonAccountIcon: {
        color: colors.colorZinc900
    },
    buttonAccountLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    buttonAccountText: {
        fontSize: 14,
        fontFamily: "Poppins-Medium"
    }, 
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    buttonPrimary: {
        backgroundColor: colors.colorZinc900,
        borderColor: colors.colorZinc900
    },
    buttonPrimaryText: {
        color: colors.colorBase000
    },
    buttonSecondary: {
        backgroundColor: colors.colorBase000,
        borderColor: colors.colorZinc900
    },
    buttonSecondaryText: {
        color: colors.colorZinc900,
    },
    buttonWhite: {
        backgroundColor: colors.colorBase000,
        borderColor: colors.colorBase000
    },
    buttonWhiteText: {
        color: colors.colorZinc900,
    },
    buttonBlue: {
        backgroundColor: colors.colorBlue100,
        borderColor: colors.colorBlue900
    },
    buttonBlueText: {
        color: colors.colorBlue900,
    },
    buttonRounded: {
        borderRadius: 20,
        width: 32,
        height: 32,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    buttonRoundedIcon: {
        width: 16,
        height: 16,
    }
});
  
export default styles;