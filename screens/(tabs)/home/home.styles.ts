import { StyleSheet } from 'react-native';
import getTheme from '@theme/theme.colors';

export default function useStyles(){
  const styles = StyleSheet.create({
    title: {
      fontFamily: 'Poppins-Regular',
      fontSize:24,
    //   color: getTheme("title")["color"],
      marginBottom: 10
    },
    titleMedium: {
      fontFamily: 'Poppins-Medium',
      fontSize: 24
    },
    section: {
      width: "100%",
      marginBottom: 30
    },
    sectionTitle: {
      fontFamily: 'Poppins-Medium',
      fontSize: 16,
      marginBottom: 10,
    //   color: getTheme("title")["color"]
    },
    col2: {
      width: "100%",
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: "space-between"
    },
    marginBottom: {
      marginBottom: 10
    },
    paddingLeft: {
      paddingLeft: 10
    },
    paddingRight: {
      paddingRight: 10
    },
    clientItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginRight: 10,
      },
      clientInfo: {
        marginLeft: 10,
      },
      scrollHorizontal:{
        rowGap: 20
      }
  });
  return styles;
}