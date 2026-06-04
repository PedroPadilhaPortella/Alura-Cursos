import Svg, { Defs, Image, Pattern, Rect, Use } from "react-native-svg";

import { colors } from "@/tokens/colors";

export function LinkedInIcon({ size = 32, color = colors.primary }) {
  return (
   <Svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={color}
  >
    <Rect width={size} height={size} fill="url(#pattern0_4303_3)" />
    <Defs>
      <Pattern
        id="pattern0_4303_3"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_4303_3" transform="scale(0.015625)" />
      </Pattern>
      <Image
        id="image0_4303_3"
        width={64}
        height={64}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
  );
}