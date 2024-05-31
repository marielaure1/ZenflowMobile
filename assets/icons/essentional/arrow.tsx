import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Arrow(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <Path d="M6.37998 3.95334L2.33331 8.00001L6.37998 12.0467" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.6667 8H2.44666" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>

    </Svg>
  )
}