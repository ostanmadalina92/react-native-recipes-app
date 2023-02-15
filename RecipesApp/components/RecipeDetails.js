import { Text, View, Image, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import HTML from "react-native-render-html";
const API_KEY = "a6d07f2ff64744d585a354c7f28b1762";

export default function RecipeDetails({ route }) {

  const { itemId, itemImage, itemTitle } = route.params;
  const [recipe, setRecipe] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${itemId}/information?apiKey=${API_KEY}`
        );
        setRecipe(response.data);
      };
      fetchData();
    }, []);

  return (
    <View>
      <Text>details</Text>
      <View style={styles.recipe}>
        <Image
          style={styles.image}
          source={{
            uri: `${itemImage}`,
          }}
        />
        <Text style={styles.title}>{itemTitle}</Text>
        {/* <Text style={styles.subTitle}>{recipe.instructions}</Text> */}

        <HTML source={{ html: recipe.summary }} />
        {/* <HTML source={{ html: "<h1>Hello, world!</h1>" }} /> */}
      </View>
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
