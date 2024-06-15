import * as React from 'react';
import { View, Text } from 'react-native';

const Alert = ({message = "Une erreur c'est produite", type ="error", error =""}) => {
    console.log(error);

    let backgroundColor = "#FFE1E1";
    let color = "#FD4949";

    switch (type) {
        case "error":
            backgroundColor = "#FFE1E1";
            color = "#FD4949";
            break;
    
        default:
            break;
    }
    
    return (
        <View style={{ backgroundColor: backgroundColor, borderRadius: 10, width: "100%", padding: 10 }}>
            <Text style={{ color: color }}>{message}</Text>
        </View>
    )
};
  
export default Alert;