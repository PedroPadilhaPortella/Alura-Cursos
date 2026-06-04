import Svg, { Defs, Image, Pattern, Rect, Use } from "react-native-svg";

import { colors } from "@/tokens/colors";

export function TwitchIcon({ size = 32, color = colors.primary }) {
  return (
   <Svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={color}
  >
    <Rect width={size} height={size} fill="url(#pattern0_4303_12)" />
    <Defs>
      <Pattern
        id="pattern0_4303_12"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_4303_12" transform="scale(0.015625)" />
      </Pattern>
      <Image
        id="image0_4303_12"
        width={64}
        height={64}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
  );
}