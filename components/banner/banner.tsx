import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { BannerProps } from "@/components/banner/banner.interface";
import styles from "@/components/banner/banner.styles";
import ButtonGoBack from "@/components/buttons/button-go-back";

const Banner = ({title, image = null}: BannerProps) => {
    return (
        <>
            {image ? (
                <ImageBackground source={image} resizeMode="cover" style={[styles.container]}>
                    <View style={[styles.alignLeft]}>
                        <ButtonGoBack/>
                    </View>
                    <Text style={[styles.title]}>{title}</Text>
                </ImageBackground>
            ):(
                <View style={[styles.containerBasic]}>
                    <View style={[styles.alignLeft]}>
                        <ButtonGoBack/>
                    </View>
                    <Text style={[styles.containerBasicTitle]}>{title}</Text>
                </View>
            )}
        </>
    )
}

export default Banner;