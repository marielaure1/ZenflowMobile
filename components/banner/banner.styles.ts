import { StyleSheet } from 'react-native';
import variables from '@theme/theme.variables';
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        padding: 20,
        paddingTop: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2EB4FF", 
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
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