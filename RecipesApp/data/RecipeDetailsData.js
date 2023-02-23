import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import { recipeStore } from "../store/detailsStore";

export default getRecipeDetailsData = (itemId) => {
  const recipe = useSyncExternalStore(
    recipeStore.subscribe,
    recipeStore.getSnapshot
  );
  useEffect(() => {
    recipeStore.fetchRecipes(itemId);
  }, []);

  return recipe;
};
