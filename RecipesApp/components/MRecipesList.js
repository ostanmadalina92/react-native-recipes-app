import { useEffect } from "react";
import { observer } from "mobx-react";
import { recipesStore } from "../mobxStore/mRecipesStore";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import EaseInView from "../animations/EaseInView";

const MRecipesList = observer(({ navigation }) => {
  const { recipes } = recipesStore;

  useEffect(() => {
    recipesStore.fetchRecipes();
  }, []);

  return (
    <View style={styles.container}>
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
            <Pressable
              title="Go to recipe details"
              onPress={() =>
                navigation.navigate("RecipeDetails", {
                  itemId: item.id,
                  itemImage: item.image,
                  itemTitle: item.title,
                })
              }
              style={styles.recipeListBtn}
            >
              <EaseInView>
                <Text style={styles.recipeListBtnText}>
                  Go to recipe details
                </Text>
              </EaseInView>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
});

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
  recipeListBtnText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  recipeListBtn: {
    backgroundColor: "#3BDE3D",
    width: "100%",
    borderRadius: "4%",
    padding: "2%",
  },
});

export default MRecipesList;
