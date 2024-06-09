import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { BannerProps } from "@/components/banner/banner.interface";
import styles from "@/components/banner/banner.styles";
import ButtonGoBack from "@/components/buttons/button-go-back";

const Banner = ({title, image}: BannerProps) => {
    return (
        <ImageBackground source={image} resizeMode="cover" style={[styles.container]}>
            <View style={[styles.alignLeft]}>
                <ButtonGoBack/>
            </View>
            <Text style={[styles.title]}>{title}</Text>
        </ImageBackground>
    )
}

export default Banner;