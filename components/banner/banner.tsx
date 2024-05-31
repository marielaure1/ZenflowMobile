import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { BannerProps } from "@/components/banner/banner.interface";
import styles from "@/components/banner/banner.styles";
import ButtonGoBack from "@/components/buttons/button-go-back";
import BackgroundBanner1 from "@img/banner/banner-1.jpg";

const Banner = ({title}: BannerProps) => {
    return (
        <ImageBackground source={BackgroundBanner1} resizeMode="cover" style={[styles.container]}>
            <View style={[styles.alignLeft]}>
                <ButtonGoBack/>
            </View>
            <Text style={[styles.title]}>{title}</Text>
        </ImageBackground>
    )
}

export default Banner;