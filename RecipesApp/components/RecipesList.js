import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  Animated,
  Easing,
} from "react-native";
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

  const EaseInView = (props) => {
    const easeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(easeAnim, {
        toValue: 1,
        duration: 5000,
        // easing: Easing.linear,
        easing: Easing.elastic(1.5),
      }).start();
    }, [easeAnim]);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          // marginLeft: easeAnim.interpolate({
          //   inputRange: [0, 10],
          //   outputRange: [0, 50],
          // }),
          // opacity: easeAnim.interpolate({
          //   inputRange: [0, 0.5, 1],
          //   outputRange: [0, 1, 2],
          // }),
          transform: [{ scale: easeAnim }],
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

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
