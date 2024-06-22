import { StyleSheet } from 'react-native';
import getTheme from '@theme/theme.colors';
import variables from '@theme/theme.variables';

export default function useStyles(){
  
  const styles = StyleSheet.create({
    card: {
      width: 300,
      height: 200,
      backgroundColor: "white",
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
      color: "black"
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
      fontFamily: 'PoppinsMedium',
      fontSize: 14,
      color: "#020202"
    },
    logo: {
      height: 50,
      width: 50
    },
    cardSubTitle: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
    }
  });
  return styles;
}