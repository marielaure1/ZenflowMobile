/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import LineChart from './components/LineChart';
import {data} from './data/data';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AnimatedText from './components/AnimatedText';
import {useSharedValue} from 'react-native-reanimated';
import {useFont} from '@shopify/react-native-skia';

const LineChartScreen = () => {
  const CHART_MARGIN = 20;
  const CHART_HEIGHT = 400;
  const {width: CHART_WIDTH} = useWindowDimensions();
  const [selectedDate, setSelectedDate] = useState<string>('Total');
  const selectedValue = useSharedValue(0);
//   const font = useFont(require('./src/assets/fonts/Roboto-Regular.ttf'), 88);

//   if (!font) {
//     return null;
//   }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView  style={styles.container}>
        <Text style={styles.text}>{selectedDate} Expenses</Text>
        {/* <AnimatedText selectedValue={selectedValue} /> */}
        <LineChart
          data={data}
          chartHeight={CHART_HEIGHT}
          chartWidth={CHART_WIDTH}
          chartMargin={CHART_MARGIN}
          setSelectedDate={setSelectedDate}
          selectedValue={selectedValue}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default LineChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  text: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
});
