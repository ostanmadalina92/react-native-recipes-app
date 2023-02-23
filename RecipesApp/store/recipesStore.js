let recipes = [];
let listeners = [];

const API_KEY = "67852d387b50474c9ee323fad9788aa6";

export const recipesStore = {
  async fetchRecipes() {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=25`
      );
      const data = await response.json();
      recipes = data.results.map((result) => ({
        id: result.id,
        title: result.title,
        image: result.image,
      }));
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
    return recipes;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}