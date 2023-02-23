import { Text, View, Image, StyleSheet } from "react-native";
import HTML from "react-native-render-html";
import RotateInView from "../animations/RotateInView";
import getRecipeDetailsData from "../data/RecipeDetailsData";


export default function RecipeDetails({ route }) {
  const { itemId, itemImage, itemTitle } = route.params;

  const recipe = getRecipeDetailsData(itemId);

  return (
    <View>
      <View style={styles.recipe}>
        <Image
          style={styles.image}
          source={{
            uri: `${itemImage}`,
          }}
        />
        <Text style={styles.title}>{itemTitle}</Text>
        <RotateInView>
          <View style={styles.summary}>
            <HTML source={{ html: recipe.summary }} />
          </View>
          <Text>{recipe.title}</Text>
        </RotateInView>
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
  summary: {
    marginTop: "4%",
    paddingTop: "2%",
    backgroundColor: "#e9eee4",
  },
});
