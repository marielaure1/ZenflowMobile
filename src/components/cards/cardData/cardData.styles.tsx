import { StyleSheet } from 'react-native';
import getTheme from '@/src/theme/theme.colors';
import variables from '@/src/theme/theme.variables';

export default function useStyles(){
  
  const styles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: getTheme("card")["background"],
      borderRadius: 8,
      padding: 10
    },
    cardRight: {
      marginRight: 5
    },
    cardLeft: {
      marginLeft: 5
    },
    cardTitle: {
      fontFamily: 'Poppins-Medium',
      fontSize: 12,
      width: "100%"
    },
    cardBody: {
      width: "100%",
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: "space-between",
      paddingTop: 10
    },
    cardNumber: {
      fontFamily: 'Poppins-Medium',
      fontSize: 28,
      color: getTheme("card")["color"]
    },
    cardType: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      color: getTheme("card")["color"]
    }
  });
  return styles;
}