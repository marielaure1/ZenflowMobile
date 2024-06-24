import { StyleSheet } from 'react-native';
import getTheme from '@theme/theme.colors';
import getVariables from '@theme/theme.variables';

export default function useStyles(){
  const variables = getVariables();
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      width: 300,
      minHeight: 300
    },
    blocTitle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 20
    },
    blocTitleLeft: {
      flexDirection: "row"
    },
    sectionTitle: {
      marginRight: 10,
      fontSize: 16,
      fontWeight: 500
    },
    count: {
      marginRight: 10,
      backgroundColor: "#E2E1FF",
      width: 20,
      height: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5
    },
    countText: {
      color: "#6E69F4",
      fontSize: 14
    }
  });
  
  return styles;
}