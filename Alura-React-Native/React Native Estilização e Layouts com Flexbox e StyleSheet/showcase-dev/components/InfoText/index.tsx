import { colors } from "@/tokens/colors";
import { fontFamily, fontSize, lineHeight } from "@/tokens/typography";
import { StyleSheet, Text } from "react-native";

type InfoTextProps = {
  title: string;
  highlightTitle?: string;
  description: string;
};

export default function InfoText({
  title,
  highlightTitle,
  description,
}: InfoTextProps) {
  return (
    <Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.highlightTitle}> {highlightTitle}</Text>
      <Text style={styles.description}>
        {"\n\n"}
        {description}
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fontFamily.kronaOne.regular,
    fontSize: fontSize.headings.h3,
    lineHeight: lineHeight.headings * fontSize.headings.h3,
    color: colors.onBackground,
  },
  highlightTitle: {
    fontFamily: fontFamily.kronaOne.regular,
    fontSize: fontSize.headings.h3,
    lineHeight: lineHeight.headings * fontSize.headings.h3,
    color: colors.primary,
  },
  description: {
    fontFamily: fontFamily.montserrat.regular,
    fontSize: fontSize.body.md,
    lineHeight: lineHeight.body * fontSize.body.md,
    color: colors.onBackground,
  },
});
