import {
  default as FontAwesome5,
  default as MaterialIcons,
} from "@expo/vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomNavigation } from "react-native-paper";

import { colors } from "../styles/colors";

import Adventures from "./Adventures";
import NewAdventure from "./Adventures/NewAdventure";
import Reminders from "./Reminders";
import { AdventuresProvider } from "@/context/adventures";

export type AdventuresStackParamList = {
  AdventuresMain: undefined;
  NewAdventure: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AdventuresStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdventuresMain" component={Adventures} />
      <Stack.Screen name="NewAdventure" component={NewAdventure} />
    </Stack.Navigator>
  );
}

export default function RootLayout() {
  return (
    <AdventuresProvider>
      <Tab.Navigator
        id="bottom-tabs"
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            style={{ backgroundColor: colors.container }}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            activeColor={colors.onSurface}
            inactiveColor={colors.onSurface}
            activeIndicatorStyle={{ backgroundColor: colors.outline }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel.toString()
                  : options.title !== undefined
                    ? options.title
                    : "";

              return label;
            }}
          />
        )}
      >
        <Tab.Screen
          name="Aventuras"
          component={AdventuresStack}
          options={{
            tabBarLabel: "Aventuras",
            tabBarIcon: ({ color, size }) => {
              return <MaterialIcons name="walking" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Lembretes"
          component={Reminders}
          options={{
            tabBarLabel: "Lembretes",
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome5 name="bell" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </AdventuresProvider>
  );
}
