import React from 'react';
import { Pressable, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Layer } from 'iconsax-react-native'; // Assurez-vous d'importer correctement le composant

const AnimatedIcon = ({ icon, text, style, textStyle, action }) => {
  const onPressHandler = () => {
    action(); // Appeler la fonction d'action passée en paramètre
  };

  return (
    <Pressable onPress={onPressHandler}>
      <Animated.View style={[style]}>
        <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
          {icon}
        </View>
        <Animated.Text style={[textStyle, { color: 'white', fontSize: 18, marginLeft: 8 }]}>
          {text}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

export default AnimatedIcon;
