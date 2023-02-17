import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Drawer from "react-native-drawer";
import homeImage from "../assets/plant-based-food.jpeg";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import FadeInView from "../animations/FadeInView";

export default function Home({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <View>
      <Drawer
        style={styles.containerD}
        type="overlay"
        content={
          <TouchableOpacity onPress={closeMenu}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.drawerLinks}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("RecipesList")}
            >
              <Text style={styles.drawerLinks}>Recipes List </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        }
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        open={isOpen}
      >
        <View style={styles.hamburger}>
          <TouchableOpacity onPress={toggleMenu}>
            <Icon name={isOpen ? "times" : "bars"} size={28} color="#18771A" />
          </TouchableOpacity>
        </View>
      </Drawer>

      <View style={styles.titleArea}>
        <Text style={styles.title}>Welcome to my cuisine!</Text>
        <Text style={styles.subtitle}>
          Here you can find the best recipes to suit your diet!
        </Text>
      </View>

      <Image style={styles.image} source={homeImage} />
      <View style={styles.btnContainer}>
        <FadeInView></FadeInView>
        <Pressable
          style={styles.recipeListBtn}
          title="Go to recipes list"
          onPress={() => navigation.navigate("RecipesList")}
        >
          <FadeInView>
            <Text style={styles.recipeListBtnText}>Check out my recipes!</Text>
          </FadeInView>
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
  hamburger: {
    alignItems: "flex-end",
    marginRight: "5%",
  },
  drawerLinks: {
    color: "#18771A",
    marginLeft: "5%",
    fontWeight: "500",
  },
  containerD: {
    width: "20%",
    backgroundColor: "red",
  },
});
