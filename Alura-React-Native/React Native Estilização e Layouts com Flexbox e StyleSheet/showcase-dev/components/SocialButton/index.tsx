import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { GitHubIcon } from "../icons/GitHub";
import { InstagramIcon } from "../icons/Instagram";
import { LinkedInIcon } from "../icons/LinkedIn";
import { TwitchIcon } from "../icons/Twitch";
import { colors } from "@/tokens/colors";
import { fontFamily, fontSize, lineHeight } from "@/tokens/typography";

export enum SocialNetworks {
  github,
  instagram,
  linkedin,
  twitch,
}

type SocialButtonProps = PressableProps & {
  socialNetwork: SocialNetworks;
};

const icon = (socialNetwork: SocialNetworks) => {
  switch (socialNetwork) {
    case SocialNetworks.github:
      return <GitHubIcon />;
    case SocialNetworks.instagram:
      return <InstagramIcon />;
    case SocialNetworks.linkedin:
      return <LinkedInIcon />;
    case SocialNetworks.twitch:
      return <TwitchIcon />;
  }
};

const title = (socialNetwork: SocialNetworks) => {
  switch (socialNetwork) {
    case SocialNetworks.github:
      return "GitHub";
    case SocialNetworks.instagram:
      return "Instagram";
    case SocialNetworks.linkedin:
      return "LinkedIn";
    case SocialNetworks.twitch:
      return "Twitch";
  }
};

export default function SocialButton({
  socialNetwork,
  ...rest
}: SocialButtonProps) {
  return (
    <Pressable style={styles.button} {...rest}>
      {icon(socialNetwork)}
      <Text style={styles.label}>{title(socialNetwork)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 8,
    padding: 23,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  label: {
    color: colors.onBackground,
    fontFamily: fontFamily.montserrat.semibold,
    fontSize: fontSize.body.xl,
    lineHeight: fontSize.headings.h3 * lineHeight.body,
  },
});
