import { StyleSheet } from 'react-native';
import getTheme from '@theme/theme.colors';
import getVariables from '@theme/theme.variables';

export default function useStyles(){
  const variables = getVariables();
  
  const styles = StyleSheet.create({
    container: {
        width: "48%",
    },
    title: {
        fontSize: 12,
        color: "#989BA5",
        fontFamily: "Poppins500"
    },
    blocData: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    data: {
        fontSize: 30,
        color: "#020202",
        fontFamily: "Poppins500"
    }
  });
  
  return styles;
}