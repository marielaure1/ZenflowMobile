import { StyleSheet } from 'react-native';
import variables from '@theme/theme.variables';
  
const styles = StyleSheet.create({

      container: {
        flexDirection: "column",
        gap: 20
      },
      input: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
      },
      formGroup: {
        flexDirection: "column",
        gap: 10
      },
      label: {
        fontSize: 14,
      },
      flex: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8
      }
});
  
export default styles;