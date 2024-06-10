// src/components/MyBottomSheet.tsx

import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const MyBottomSheet = forwardRef((props, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  useImperativeHandle(ref, () => ({
    expand: () => {
      bottomSheetRef.current?.expand();
    },
    collapse: () => {
      bottomSheetRef.current?.collapse();
    },
  }));

  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1} // Hidden initially
      snapPoints={snapPoints}
    >
      <View style={styles.contentContainer}>
        <Text>Contenu du Bottom Sheet</Text>
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyBottomSheet;
