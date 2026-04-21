import { useRef, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

import { ActionButton } from "../components/ActionButton";
import { FocusButton } from "../components/FocusButton";
import { Footer } from "../components/Footer";
import { PauseIcon, PlayIcon } from "../components/Icons";
import { Timer } from "../components/Timer";

const focusTime = require("../assets/images/focus.png");
const shortBreak = require("../assets/images/short-break.png");
const longBreak = require("../assets/images/long-break.png");

const pomodoro = [
  {
    id: "focus-time",
    display: "Foco",
    time: 25 * 60,
    image: focusTime,
  },
  {
    id: "short-break",
    display: "Pausa curta",
    time: 5 * 60,
    image: shortBreak,
  },
  {
    id: "long-break",
    display: "Pausa longa",
    time: 15 * 60,
    image: longBreak,
  },
];

export default function Pomodoro() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].time);

  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toogleTimerType = (timerType) => {
    setTimerType(timerType);
    setSeconds(timerType.time);
    clearTimer();
  };

  const toogleTimer = () => {
    if (timerRef.current) {
      clearTimer();
      return;
    }

    const id = setInterval(() => {
      setSeconds((prevState) => {
        if (prevState === 0) {
          clearTimer();
          return timerType.time;
        }
        return prevState - 1;
      });
    }, 1000);

    setTimerRunning(true);
    console.warn("timer is running");
    timerRef.current = id;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image style={styles.image} source={timerType.image} />
        <View style={styles.content}>
          <View style={styles.actions}>
            {pomodoro.map((item) => (
              <ActionButton
                key={item.id}
                caption={item.display}
                isActive={item.id === timerType.id}
                onActionButtonPress={() => toogleTimerType(item)}
              />
            ))}
          </View>
          <Timer time={seconds} />
          <FocusButton
            title={isTimerRunning ? "Pausar" : "Começar"}
            icon={isTimerRunning ? <PauseIcon /> : <PlayIcon />}
            onPress={toogleTimer}
          />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  scrollContainer: {
    alignItems: "center",
    gap: 40,
    width: "100%",
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
  },
  content: {
    gap: 32,
    padding: 24,
    backgroundColor: "#14448080",
    // width: "80%",
    borderWidth: 2,
    borderColor: "#144480",
    borderRadius: 32,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
