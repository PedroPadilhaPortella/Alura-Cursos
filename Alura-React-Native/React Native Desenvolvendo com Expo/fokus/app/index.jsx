import { useState, useRef } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

import { ActionButton } from "./components/ActionButton";
import { FocusButton } from "./components/FocusButton";
import { Timer } from "./components/Timer";
import { PlayIcon, PauseIcon } from './components/Icons';

const focusTime = require("./focus.png");
const shortBreak = require("./short-break.png");
const longBreak = require("./long-break.png");

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
    time: 15  * 60,
    image: longBreak,
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].time)

  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  }

  const toogleTimerType = (timerType) => {
    setTimerType(timerType);
    setSeconds(timerType.time)
    clearTimer();
  }

  const toogleTimer = () => {
    if (timerRef.current) {
      clearTimer();
      return;
    }

    const id = setInterval(() => {
      setSeconds(prevState => {
        if(prevState === 0) {
          clearTimer();
          return timerType.time;
        }
        return prevState - 1;
      });
    }, 1000);
    
    setTimerRunning(true);
    console.warn('timer is running')
    timerRef.current = id;
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={timerType.image} />
      <View style={styles.context}>
        <View style={styles.actions}>
          {pomodoro.map((item) => (
            <ActionButton 
              key={item.id}
              caption={item.display}
              isActive={item.id === timerType.id}
              onActionButtonPress={() => toogleTimerType(item)} />
          ))}
        </View>
        <Timer time={seconds} />
        <FocusButton
          title={isTimerRunning ? 'Pausar' : 'Começar'}
          icon={isTimerRunning ? <PauseIcon /> : <PlayIcon /> }
          onPress={toogleTimer}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.credits}>Desenvolvido por Pedro Portella</Text>
        <Text style={styles.credits}>em parceira com Alura</Text>
      </View>
    </View>
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
  image: {
    width: width * 0.6,
    height: width * 0.6,
  },
  context: {
    gap: 32,
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderWidth: 2,
    borderColor: "#144480",
    borderRadius: 32,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footer: {
    width: "80%",
  },
  credits: {
    textAlign: "center",
    fontSize: 12,
    color: "#98A0A8",
  },
});
