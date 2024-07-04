import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const Loading = () => {
    return(
        <View style={{ flex: 1 }} className="bg-white flex-col justify-center items-center">
            <LottieView
            source={require("@icons/lottie/loading.icon.json")}
            style={{
                width: 100 * 0.9,
                height: 100 * 0.9,
            }}
            autoPlay
            loop
            />
        </View>
    )
}

export default Loading;