import { StyleSheet } from 'react-native';
import getTheme from '@theme/theme.colors';
import variables from '@theme/theme.variables';

export default function useStyles(){
  
  const styles = StyleSheet.create({
    card: {
      width: 300,
      height: 200,
      backgroundColor: getTheme("card")["background"],
      borderRadius: 8,
      padding: 20
    },
    cardHeader: {
      width: "100%",
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: "space-between",
    },
    cardTitle: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      color: getTheme("card")["color"]
    },
    cardFlags: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
    },
    cardBody: {
      width: "100%",
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: "space-between",
      paddingTop: 10
    },
    cardLine: {
      width: "100%",
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: "space-between",
      paddingTop: 5
    },
    cardLineText: {
      fontFamily: 'Poppins-Medium',
      fontSize: 14,
      color: getTheme("card")["textColor"]
    }
  });
  return styles;
}