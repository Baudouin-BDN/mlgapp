import React, { useState, useEffect} from "react";

import APIService from "../APIService";

import websiteUrl from "../remote";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  useWindowDimensions
} from "react-native";

import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([]);
  const { height, width, scale, fontScale } = useWindowDimensions();
  useEffect(() => {
    APIService.getArticles()
      .then((resp) => resp.json())
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.home}>
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ArticleDetailScreen", { article: item })
              }
            >
              <View style={styles.article}>
                <View style={{ justifyContent: "left" }}>
                  <Text style={styles.article.title}>{item.title}</Text>
                </View>
                <Image
                  source={{ uri: `${websiteUrl}/${item.photo}` }} 
                  width={width-30}
                  height={width-30}
                />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
