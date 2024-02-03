import React, { useState, useEffect } from "react";

import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  Button,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import HTMLRender from "react-native-render-html";
import { useRoute } from "@react-navigation/native";
import styles from "../styles/styles";
import websiteUrl from "../remote";

function ArticleDetailScreen({ navigation }) {
  const route = useRoute();
  const [article, SetArticle] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { height, width, scale, fontScale } = useWindowDimensions();

  useEffect(() => {
    SetArticle(route.params.article);
    setLoaded(true);
  }, []);

  if (loaded == false) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ fontSize: 18 }}>Chargement...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{ padding: 10 }}>
        <Text style={styles.articleDetailTitle}> {article.title}</Text>
        <View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: width - 30, height: width - 30 }}
              source={{ uri: `${websiteUrl}/${article.photo}` }}
            />
          </View>
        </View>
        <View style={{ width: "90%" }}>
          <HTMLRender
            contentWidth={width}
            source={{ html: "" + article.content }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default ArticleDetailScreen;
