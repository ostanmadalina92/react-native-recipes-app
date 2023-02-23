let recipe = {};
let listeners = [];

const API_KEY = "67852d387b50474c9ee323fad9788aa6";

export const recipeStore = {
  async fetchRecipes(itemId) {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${itemId}/information?apiKey=${API_KEY}`
      );
      const data = await response.json();
      recipe = {
        summary: data.summary,
      };
      emitChange();
    } catch (error) {
      console.error(error);
    }
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return recipe;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
