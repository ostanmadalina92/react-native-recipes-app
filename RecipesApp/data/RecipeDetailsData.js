import { useState, useEffect} from "react";
import axios from "axios";

const API_KEY = "67852d387b50474c9ee323fad9788aa6";

export default getRecipeDetailsData = (itemId) => {

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

return recipe;
}

