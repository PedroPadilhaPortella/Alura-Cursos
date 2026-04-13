import { useRef } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";

export const FocusButton = ({ title, icon, outline, onPress }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.05,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        style={[styles.button, outline && styles.outlineButton]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {icon}
        <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>
          {title}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BB72FF",
    padding: 8,
    borderWidth: 2,
    borderColor: "#144480",
    borderRadius: 32,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderColor: "#BB72FF",
    borderWidth: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
    fontWeight: "600",
  },
  outlineButtonText: {
    color: "#BB72FF",
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 1.05 }],
  },
});
