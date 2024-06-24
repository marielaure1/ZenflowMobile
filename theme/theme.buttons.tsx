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
        width: 26,
        height: 26,
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
        fontFamily: "Poppins500"
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
    buttonRed: {
        backgroundColor: colors.colorRed100,
        borderColor: colors.colorRed900
    },
    buttonRedText: {
        color: colors.colorRed900,
    },
    buttonGreen: {
        backgroundColor: colors.colorGreen100,
        borderColor: colors.colorGreen100
    },
    buttonGreenText: {
        color: colors.colorBlue900,
    },
    buttonGrey: {
        backgroundColor: colors.colorBase200,
        borderColor: colors.colorBase200
    },
    buttonGreyText: {
        color: colors.colorBase700,
    },
    buttonOrange: {
        backgroundColor: colors.colorOrange100,
        borderColor: colors.colorOrange100
    },
    buttonOrangeText: {
        color: colors.colorOrange900,
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