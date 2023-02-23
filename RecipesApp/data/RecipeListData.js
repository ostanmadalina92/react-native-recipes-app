import { useEffect } from "react";
import { recipesStore } from "../store/recipesStore";
import { useSyncExternalStore } from "react";

export default getRecipeLIstData = () => {
  const recipes = useSyncExternalStore(
    recipesStore.subscribe,
    recipesStore.getSnapshot
  );

    useEffect(() => {
      recipesStore.fetchRecipes();
    }, []);

  return recipes;
};


