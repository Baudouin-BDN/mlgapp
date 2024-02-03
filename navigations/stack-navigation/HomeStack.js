import { Button, Image, TouchableOpacity, View, Text } from "react-native";
import HomeScreen from "../../screens/index";
import MenuScreen from "../../screens/Menu";
import ArticlesScreen from "../../screens/Articles";
import ArticleDetailScreen from "../../screens/ArticleDetail";
import LoginScreen from "../../screens/Login";

import SignupScreen from "../../screens/Signup";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import myTintColor from "../../styles/myTintColor";
import myLightColor from "../../styles/myLightColor";

const Stack = createNativeStackNavigator();

function LogoTitle(props) {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 24, color: props.color }}>
        {" "}
        MLG{" "}
      </Text>
    </View>
  );
}

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: myTintColor,
      }}
    >
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          headerTitle: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <LogoTitle color={myTintColor} />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <View>
              <TouchableOpacity
                style={{ backgroundColor: myLightColor, borderRadius: 20 }}
                onPress={() => navigation.navigate("Settings")}
              >
                <MaterialCommunityIcons
                  name="account"
                  color={myTintColor}
                  size={24}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        component={MenuScreen}
        name="MenuScreen"
        options={{
          title: "Menu",
        }}
      />
      <Stack.Screen
        component={ArticleDetailScreen}
        name="ArticleDetailScreen"
        options={{
          title: "Détails",
        }}
      />
    </Stack.Navigator>
  );
}
