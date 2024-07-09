import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { ProgressBar as PaperProgressBar, MD3Colors } from 'react-native-paper';
import useStyles from './progress-bar.styles';

interface ProgressBarProps {
  progress: number;
  colors: object;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, colors }) => {
  const styles = useStyles();
  
  const cardWidth = Dimensions.get('window').width / 2;
  return (
    <View className='flex-row items-center gap-xs'>
      <PaperProgressBar style={[styles.bar, { width: cardWidth - 80 }]} progress={progress} color={colors.foreground}  />
      <Text style={styles.barText}>{progress * 100 + "%"}</Text>
    </View>
  );
};

export default ProgressBar;
