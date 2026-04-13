import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";

import { TaskProvider } from "../components/context/TaskProvider";

export default function Layout() {
  return (
    <TaskProvider>
      <Drawer
        screenOptions={{
          drawerStyle: { backgroundColor: "#021123" },
          drawerLabelStyle: { color: "#FFF" },
          headerStyle: {
            backgroundColor: "#021123",
          },
          headerShadowVisible: false,
          headerTintColor: "#FFF",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerShown: false,
            drawerItemStyle: { display: "none" },
          }}
        />
        <Drawer.Screen
          name="pomodoro"
          options={{
            drawerLabel: "Pomodoro",
            title: "",
          }}
        />
        <Drawer.Screen
          name="tasks"
          options={{
            drawerLabel: "Lista de Tarefas",
            title: "",
          }}
        />
        <Drawer.Screen
          name="create-task/index"
          options={{
            title: "",
            drawerItemStyle: { display: "none" },
            headerLeft: () => {
              return (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={"#FFF"}
                  style={{ marginLeft: 16 }}
                  onPress={() => router.navigate("/tasks")}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="edit-task/[id]"
          options={{
            title: "",
            drawerItemStyle: { display: "none" },
            headerLeft: () => {
              return (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={"#FFF"}
                  style={{ marginLeft: 16 }}
                  onPress={() => router.navigate("/tasks")}
                />
              );
            },
          }}
        />
      </Drawer>
    </TaskProvider>
  );
}
