import ArticlesScreen from "../../screens/Articles";
import ArticleDetailScreen from "../../screens/ArticleDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import myTintColor from "../../styles/myTintColor";

const Stack = createNativeStackNavigator();

export default function ArticlesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: myTintColor,
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        component={ArticlesScreen}
        name="ArticlesScreen"
        options={{ headerShown: true, title: "Publications" }}
      />
      <Stack.Screen component={ArticleDetailScreen} name="ArticleDetail" />
    </Stack.Navigator>
  );
}
