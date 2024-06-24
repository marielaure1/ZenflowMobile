import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { BannerProps } from "@/components/banner/banner.interface";
import ButtonGoBack from "@/components/buttons/button-go-back";

const Banner = ({title, btnBack, filter, search}: BannerProps) => {
    return (
        <>
           <View className="h-[130px] w-full pt-[70px] items-center mb-[10px]">
                <View className="w-full flex-row justify-start items-center absolute left-[0] top-[40px]">
                    {btnBack && <ButtonGoBack/>}
                </View>
                <Text className="text-2xl font-[Poppins600] text-center">{title}</Text>
            </View>
        </>
    )
}

export default Banner;