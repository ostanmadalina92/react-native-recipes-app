import { Text, View, Image, StyleSheet, Animated, Easing } from "react-native";
import { useState, useEffect, useRef } from "react";
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

  const RotateInView = (props) => {
    const rotateAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease)
      }).start();
    }, [rotateAnim]);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: rotateAnim, // Bind opacity to animated value
          transform: [
            {
              rotate: rotateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["-180deg", "0deg"],
              }),
            },
          ],
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

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
