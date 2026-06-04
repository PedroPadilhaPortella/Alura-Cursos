import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { StarIcon } from "../icons/StarIcon";
import { colors } from "@/tokens/colors";
import { fontFamily, fontSize } from "@/tokens/typography";

type HeaderProps = {
  name: string;
  image: ImageSourcePropType;
};

export default function Header({ name, image }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>DEV {name}</Text>
        <StarIcon />
      </View>

      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper} />
        <Image source={image} resizeMode="cover" style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: 36,
  },
  titleContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  title: {
    fontFamily: fontFamily.montserrat.semibold,
    fontSize: fontSize.headings.h3,
    color: colors.onBackground,
  },
  imageContainer: {
    height: 340,
    alignItems: "center",
    marginTop: 12,
    marginRight: 12,
    marginBottom: 16,
  },
  image: {
    borderRadius: 16,
    width: "100%",
    height: "100%",
  },
  imageWrapper: {
    position: "absolute",
    bottom: 12,
    left: 12,
    borderColor: colors.primary,
    borderRadius: 16,
    borderWidth: 2,
    width: "100%",
    height: "100%",
  },
});
