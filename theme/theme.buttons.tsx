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
    buttonText: {
        textAlign: "center",
        fontSize: 14
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
});
  
export default styles;