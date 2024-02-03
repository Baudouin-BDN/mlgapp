import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import styles from "../styles/styles";

const menustyles = StyleSheet.create({
  element: {
    backgroundColor: "white",
    fontWeight: "bold",
    elevation: 1,
    height: 50,
    padding: 10,
    marging: 5,
    borderWidth: 0,
    borderColor: "lightgray",
    justifyContent: "center",
    alignItems: "left",
    text: {
      fontWeight: "bold",
    },
  },
});

function MenuScreen({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <View style={menustyles.element}>
          <Text style={menustyles.element.text}> Se connecter </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
        <View style={menustyles.element}>
          <Text style={menustyles.element.text}> Créer un compter </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("AboutScreen")}>
        <View style={menustyles.element}>
          <Text style={menustyles.element.text}> A propos de </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default MenuScreen;
