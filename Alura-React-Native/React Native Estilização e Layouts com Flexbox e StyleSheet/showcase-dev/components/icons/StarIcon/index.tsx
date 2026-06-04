import { Path, Svg } from 'react-native-svg';

import { colors } from "@/tokens/colors";

export function StarIcon({ size = 60, color = colors.primary }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 60 60">
      <Path
        stroke={color}
        strokeWidth={2}
        d="M26.8057 7.81836C29.425 17.8414 36.8896 25.7505 46.3906 28.4473C36.8565 31.1535 29.3718 39.1079 26.7773 49.1807C24.1576 39.1578 16.6935 31.2482 7.19238 28.5518C16.7269 25.8456 24.2113 17.8916 26.8057 7.81836Z"
        fill='none'
      />
    </Svg>
  );
}