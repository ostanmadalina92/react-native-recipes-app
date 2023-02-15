import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import homeImage from "../assets/plant-based-food.jpeg";

export default function Home({ navigation }) {
  return (
    <View>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Welcome to my cuisine!</Text>
        <Text style={styles.subtitle}>
          Here you can find the best recipes to suit your diet!
        </Text>
      </View>

      <Image style={styles.image} source={homeImage} />
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.recipeListBtn}
          title="Go to recipes list"
          onPress={() => navigation.navigate("RecipesList")}
        >
          <Text style={styles.recipeListBtnText}>Check out my recipes!</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleArea: {
    padding: 10,
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: "#3BDE3D",
    fontWeight: "bold",
    fontSize: 30,
  },
  subtitle: {
    color: "#18771A",
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    height: "62%",
    width: "100%",
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "5%",
  },
  recipeListBtnText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  recipeListBtn: {
    backgroundColor: "#3BDE3D",
    width: "80%",
    borderRadius: "4%",
    padding: "5%",
  },
});
