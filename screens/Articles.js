import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";

const styles = StyleSheet.create({
  article: {
    backgroundColor: "lightblue",
    fontWeight: "bold",
    elevation: 8,
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  title: {
    fontSize: 18,
    marginTop: 5,
  },
  content: {
    backgroundColor: "lightgray",
  },
});

function ArticlesScreen({ navigation }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articles = [
      {
        id: 1,
        title: "L'ensemble Z",
        content: "Content 1",
      },
      {
        id: 2,
        title: "Opérations dans Z",
        content: "Content 2",
      },
    ];

    setArticles(articles);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ArticleDetail")}
          >
            <View style={styles.article}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.content}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
export default ArticlesScreen;
