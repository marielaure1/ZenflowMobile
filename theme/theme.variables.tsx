import { Dimensions } from 'react-native';
import {useEffect, useState} from 'react';

export default function getVariables(){
  const [ orientation, setOrientation ] = useState("PORTRAIT");

  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;
   
  useEffect(() => {
    Dimensions.addEventListener('change', ({window:{ width , height}})=>{
      if (width < height) {
        screenWidth = width;
        screenHeight = height;
        setOrientation("PORTRAIT");
      } else {
        screenWidth = width;
        screenHeight = height;
        setOrientation("LANDSCAPE");
      }
    })

  }, []);

  const variables = {
    width: screenWidth,
    height: screenHeight,
    common: {
      padding: {
        "10": 10,
        "20": 20,
      }
    }
  };

  return variables;
}