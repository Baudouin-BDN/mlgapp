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

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <View style={styles.simpleList.item}>
          <Text style={styles.simpleList.item.text}> Se connecter </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
        <View style={styles.simpleList.item}>
          <Text style={styles.simpleList.item.text}> Créer un compte</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("AboutScreen")}>
        <View style={styles.simpleList.item}>
          <Text style={styles.simpleList.item.text}> A propos de </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SettingsScreen;
