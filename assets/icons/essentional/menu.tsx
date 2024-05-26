import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Menu(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3 7h18M3 12h18M3 17h18"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}