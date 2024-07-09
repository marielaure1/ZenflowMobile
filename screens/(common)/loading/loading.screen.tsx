import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import Template from "@/components/layout/template/template";

const Loading = () => {
    return(
        <Template style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <LottieView
            source={require("@icons/lottie/Animation - 1720553184158.json")}
            style={{
                width: 300 * 0.9,
                height: 300 * 0.9,
            }}
            autoPlay
            loop
            />
        </Template>
    )
}

export default Loading;