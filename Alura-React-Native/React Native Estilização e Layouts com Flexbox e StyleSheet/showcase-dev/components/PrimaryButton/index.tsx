import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

import { fontFamily, fontSize, lineHeight } from "@/tokens/typography";
import { colors } from "@/tokens/colors";

type PrimaryButtonProps = PressableProps & {
  title: string;
};

export default function PrimaryButton({ title, ...rest }: PrimaryButtonProps) {
  return (
    <Pressable style={styles.button} {...rest}>
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 23,
    alignItems: "center",
  },
  label: {
    color: colors.background,
    fontFamily: fontFamily.montserrat.semibold,
    fontSize: fontSize.body.xl,
    lineHeight: fontSize.headings.h3 * lineHeight.body,
  },
});
