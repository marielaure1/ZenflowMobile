import * as React from 'react';
import { View, Text } from 'react-native';

const Alert = ({message = "Une erreur c'est produite", type ="error", error =""}) => {

    let backgroundColor = "#FFE1E1";
    let color = "#FD4949";

    switch (type) {
        case "error":
            backgroundColor = "#FFE1E1";
            color = "#FD4949";
            break;
        case "Not Found":
            backgroundColor = "#FFF9ED";
            color = "#FFC045";
            break;
    
        default:
            break;
    }
    
    return (
        <View className={`p-md rounded-md mb-[20px]`} style={{ backgroundColor }}>
            <Text style={{ color: color }}>{message}</Text>
        </View>
    )
};
  
export default Alert;