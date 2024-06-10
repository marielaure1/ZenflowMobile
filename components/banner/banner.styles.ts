import { StyleSheet } from 'react-native';
import variables from '@theme/theme.variables';
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 130,
        padding: 20,
        paddingTop: 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2EB4FF", 
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    containerBasic: {
        flex: 1,
        height: 130,
        padding: 20,
        paddingTop: 70,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    containerBasicTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    alignLeft: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: 'absolute',
        left: 20,
        top: 40,
    }
});
  
export default styles;