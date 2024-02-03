import { StyleSheet } from "react-native";

import myTintColor from "./myTintColor";
import myLightColor from "./myLightColor";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },

  home: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: myLightColor,
  },
  article: {
    backgroundColor: "white",
    fontWeight: "bold",
    elevation: 1,
    minHeight: 100,
    padding: 10,
    marginBottom: 10,
    borderWidth: 0,

    title: {
      fontSize: 18,
      marginTop: 5,
    },
    content: {
      backgroundColor: myLightColor,
    },
  },

  articleDetailTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  moreVertButton: {
    height: 30,
    width: 30,
  },
  simpleList: {
    item: {
      elevation: 1,
      borderWidth: 1,
      borderColor: myLightColor,
      height: 50,
      justifyContent: "left",
      padding: 10,
      text: {
        fontSize: 16,
      },
    },
  },

  form: {
    width: "95%",
    backgroundColor: myLightColor,
    padding: 5,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  submitButton: {
    borderRadius: 5,
    height: 40,
    backgroundColor: myTintColor,
    justifyContent: "center",
    alignItems: "center",
    text: {
      color: "white",
      fontSize: 16,
    },
  },

  input: {
    backgroundColor: "white",
    height: 50,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
});

export default styles;
