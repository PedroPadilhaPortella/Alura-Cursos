import { useRef } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";

export const FocusButton = ({ title, icon, onPress }) => {
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
      <Pressable style={({ pressed }) => [ styles.button ]} onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
        {icon}
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#BB72FF",
    padding: 8,
    borderWidth: 2,
    borderColor: "#144480",
    borderRadius: 32,
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 1.05 }],
  }
});