import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "../styles/styles";
import myTintColor from "../styles/myTintColor";
import APIService from "../APIService";

import { appStorage } from "../storage/myStorage";

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  function loginBtn() {
    APIService.login({ username, password })
    .then((resp) => resp.json())
    .then((resp) => {
        appStorage.set('mytoken', resp.token);
        appStorage.set('user', resp.user);
        navigation.navigate("Home");
      })
      .catch((error) => {
        // Handle any errors that occur
       console.log(error)
     });
    
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.form}>
          <View>
            <Text> Nom d'utilisateur </Text>
            <TextInput
              onChangeText={(newtext) => setUsername(newtext)}
              style={styles.input}
            />
          </View>

          <View>
            <Text> Mot de passe </Text>
            <TextInput
              onChangeText={(newtext) => setPassword(newtext)}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          <TouchableOpacity
            onPress={() => loginBtn()}
            style={styles.submitButton}
          >
            <Text style={styles.submitButton.text}> Se connecter </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text> Besoin d'un compte ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
            <Text style={{ color: myTintColor, fontWeight: "bold" }}>
              Créer un compte
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
