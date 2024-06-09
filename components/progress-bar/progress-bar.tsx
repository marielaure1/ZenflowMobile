import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ProgressBar as PaperProgressBar, MD3Colors } from 'react-native-paper';
import useStyles from './progress-bar.styles';

interface ProgressBarProps {
  progress: number;
  colors: object;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, colors }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <PaperProgressBar style={styles.bar} progress={progress} color={colors.foreground} />
      <Text style={styles.barText}>{progress * 100 + "%"}</Text>
    </View>
  );
};

export default ProgressBar;
