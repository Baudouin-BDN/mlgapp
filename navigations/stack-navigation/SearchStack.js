import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SettingsScreen from "../../screens/Settings";

import LoginScreen from "../../screens/Login";

import SignupScreen from "../../screens/Signup";

import AboutScreen from "../../screens/About";
import SearchScreen from "../../screens/Search";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import myTintColor from "../../styles/myTintColor";

const Stack = createNativeStackNavigator();

export default function SearchStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: myTintColor,
      }}
    >
      <Stack.Screen
        component={SearchScreen}
        name="SearchScreen"
        options={{
          headerShow: true,
          headerLeft: () => (
            <View>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginRight: 25 }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  color={myTintColor}
                  size={24}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: "Recherche",
        }}
      />
    </Stack.Navigator>
  );
}
