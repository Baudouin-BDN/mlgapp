import AboutScreen from "../../screens/About";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import myTintColor from "../../styles/myTintColor";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={AboutScreen}
        name="AboutScreen"
        options={{ headerShown: true, title: "A propos de" }}
      />
    </Stack.Navigator>
  );
}
