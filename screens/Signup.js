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

import myTintColor from "../styles/myTintColor";

function SignupScreen() {
  return (
    <SafeAreaView style={styles.main}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.form}>
          <View>
            <Text> Nom d'utilisateur </Text>
            <TextInput style={styles.input} />
          </View>

          <View>
            <Text> Email </Text>
            <TextInput style={styles.input} />
          </View>

          <View>
            <Text> Mot de passe </Text>
            <TextInput secureTextEntry={true} style={styles.input} />
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButton.text}> S'inscrire </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignupScreen;
