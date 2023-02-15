import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet, Button } from "react-native";
import axios from "axios";

const API_KEY = "a6d07f2ff64744d585a354c7f28b1762";

export default function RecipesList({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=25`
      );
      setRecipes(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>List item</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipe}>
            <Image
              style={styles.image}
              source={{
                uri: `${item.image}`,
              }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Button
              title="Go to recipe details"
              onPress={() =>
                navigation.navigate("RecipeDetails", {
                  itemId: item.id,
                  itemImage: item.image,
                  itemTitle: item.title,
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  recipe: {
    margin: 10,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
  },
});
