import { Button, ScrollView, Image, Pressable, View } from 'react-native';
import { Layer } from 'iconsax-react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';



const Fabs = ({btns}) => {
  const isOpen = useSharedValue(false);
  const opacity = useSharedValue(0);
  const progress = useDerivedValue(() =>
    isOpen.value ? withTiming(1) : withTiming(0),
  );

  const values = btns.map(() => useSharedValue(30));
  const widths = btns.map(() => useSharedValue(50));

  const handlePress = () => {
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      duration: 500,
    };

    if (isOpen.value) {
      widths.forEach((width, index) => {
        width.value = withTiming(50, { duration: 100 }, finish => {
          if (finish) {
            values[index].value = withDelay(index * 50, withTiming(30, config));
          }
        });
      });
      opacity.value = withTiming(0, { duration: 100 });
    } else {
      btns.forEach((btn, index) => {
        values[index].value = withDelay(btn.delay, withSpring(btn.value));
        widths[index].value = withDelay(1000 - index * 100, withSpring(280));
      });
      opacity.value = withDelay(1200, withSpring(1));
    }
    isOpen.value = !isOpen.value;
  };

  const opacityText = useAnimatedStyle(() => ({ opacity: opacity.value }));
  const widthStyles = widths.map(width => useAnimatedStyle(() => ({ width: width.value })));
  const btnStyles = values.map((value, index) => useAnimatedStyle(() => {
    const scale = interpolate(
      value.value,
      [30, btns[index].value],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      bottom: value.value,
      transform: [{ scale }],
    };
  }));
  const plusIcon = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 45}deg` }],
  }));

  const AnimatedIcon = ({ icon, text, style, textStyle, action}) => {
    const onPressHandler = () => {
      isOpen.value = false;
      action(); 
    };
  
      return (
      
        <Animated.View className="absolute right-4 bg-blue-500 h-50 w-50 rounded-full flex flex-row items-center overflow-hidden" style={[style]}>
          <Pressable onPress={onPressHandler} className="flex flex-row items-center w-full h-full">
          <View className="w-12 h-12 justify-center items-center">
            {icon}
          </View>
          <Animated.Text className="text-white text-lg" style={[textStyle]}>{text}</Animated.Text>
          </Pressable>
        </Animated.View>
    
    )};

  return (
    <>
      {btns.map((btn, index) => {

        const onPressHandler = () => {
          btn.action(); 
        };
        return (
          <AnimatedIcon
            key={index}
            icon={btn.icon}
            text={btn.text}
            style={[btnStyles[index], widthStyles[index]]}
            textStyle={opacityText}
            action={onPressHandler}
          />
        )
      })}
      <Pressable className="fixed bottom-[15] right-[15] bg-[#06A5FF] w-[50px] h-[50px] rounded-[25px] flex justify-center items-center overflow-hidden" onPress={handlePress} style={{position: "absolute", bottom: 15, right: 15}}>
        <Animated.View className="w-12 h-12 justify-center items-center" style={plusIcon}>
          <Layer size="24" color="white"/>
        </Animated.View>
      </Pressable>
    </>
  );
};

export default Fabs;
