import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

const TASKS_STORAGE_KEY = "fokus-tasks";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
        const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setTasks(loadedData);
        setIsLoaded(true);
        console.log("Tasks retrieved from AsyncStorage");
      } catch (e) {
        console.error("Error loading tasks from AsyncStorage:", e);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateData = async (value) => {
      try {
        await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(value));
        console.log("Tasks updated in AsyncStorage");
      } catch (e) {
        console.error("Error updating tasks into AsyncStorage:", e);
      }
    };

    if (isLoaded) {
      updateData(tasks);
    }
  }, [tasks]);

  const createTask = (description) => {
    setTasks((state) => {
      return [
        ...state,
        { description, id: `${description}-${state.length + 1}` },
      ];
    });
  };

  const updateTask = (id, description) => {
    setTasks((state) => {
      return state.map((task) => {
        if (task.id == id) {
          return { ...task, description: description };
        }
        return task;
      });
    });
  };

  const removeTask = (id) => {
    setTasks((state) => {
      return state.filter((t) => t.id != id);
    });
  };

  const toggleTaskStatus = (id) => {
    setTasks((state) => {
      return state.map((task) => {
        if (task.id == id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, createTask, updateTask, removeTask, toggleTaskStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
};
