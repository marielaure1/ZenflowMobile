// src/components/progress-bar/progress-bar.styles.ts

import { StyleSheet } from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      width: '100%'
    },
    bar: {
      height: 5,
      borderRadius: 5,
    },
    barText: {
        fontSize: 12,
        color: "#35BFFF",
        marginLeft: 5
      },
  });
};

export default useStyles;
