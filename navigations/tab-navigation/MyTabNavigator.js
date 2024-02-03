import { Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "../stack-navigation/HomeStack";

import SearchStack from "../stack-navigation/SearchStack";

import SettingsStack from "../stack-navigation/SettingsStack";

import myTintColor from "../../styles/myTintColor";

const Tab = createBottomTabNavigator();
const MyBottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerTitle: "",
          title: "Accueil",
          headerStyle: { height: 30 },
          tabBarActiveTintColor: myTintColor,
          tabBarInactiveTintColor: "gray",
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="home" size={26} color={props.color} />
          ),
        }}
      />

      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          headerTitle: "",
          title: "Recherche",
          tabBarActiveTintColor: myTintColor,
          tabBarInactiveTintColor: "gray",
          headerStyle: { height: 30 },
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="magnify"
              color={props.color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          headerTitle: "",
          title: "Paramètres",
          tabBarActiveTintColor: myTintColor,
          tabBarInactiveTintColor: "gray",
          headerStyle: { height: 30 },
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="cog" color={props.color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyBottomTabNavigator;
