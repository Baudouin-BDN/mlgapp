import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import MyBottomTabNavigator from "./navigations/tab-navigation/MyTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MyBottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
