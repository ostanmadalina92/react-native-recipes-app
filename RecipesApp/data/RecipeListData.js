import React, { useState, useEffect } from "react";
import axios from "axios";


const API_KEY = "67852d387b50474c9ee323fad9788aa6";

export default getRecipeLIstData = () => {
    
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

return recipes;
}



