import React, { useEffect } from 'react';
import { View, ViewStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface CardProps {
    children: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
    speed?: number;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, style = [], speed = 1, className = "" }) => {
    const animateElement = (index: number) => {
        const opacity = useSharedValue(0);
        const translateY = useSharedValue(50);
    
        useEffect(() => {
          opacity.value = withTiming(1, { duration: 1000 + index * 200 });
          translateY.value = withTiming(0, { duration: 1000 + index * 200 });
        }, [opacity, translateY, index]);
    
        const animatedStyle = useAnimatedStyle(() => {
          return {
            opacity: opacity.value,
            transform: [{ translateY: translateY.value }],
          };
        });
    
        return animatedStyle;
    };

    return (
        <Animated.View style={[animateElement(speed), ...style]}>
          <View className={`p-sm bg-base-0 flex-col gap-sm rounded-lg w-full `} style={[style]}>
              {children}
          </View>
        </Animated.View>
    );
};

export default Card;
