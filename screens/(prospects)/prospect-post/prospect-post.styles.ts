import { StyleSheet } from 'react-native';
import getTheme from '@theme/theme.colors';

export default function useStyles(){
  const styles = StyleSheet.create({
    container: {
      padding: 16,
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
  return styles;
}