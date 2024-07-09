import LottieView from 'lottie-react-native';
import * as React from 'react';
import { Dimensions, View } from 'react-native';

const Loading = () => {
    const width = Dimensions.get("screen").width
    return(
        <View className='items-center justitfy-center' style={{ width: width - 20 }}>
            <LottieView
            source={require("@icons/lottie/Animation - 1720553184158.json")}
            style={{
                width: 200 * 0.9,
                height: 200 * 0.9,
            }}
            autoPlay
            loop
            />
        </View>
    )
};
  
export default Loading;