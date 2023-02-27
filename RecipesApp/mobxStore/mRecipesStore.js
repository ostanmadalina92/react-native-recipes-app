import {observable, action} from 'mobx';

const API_KEY = "67852d387b50474c9ee323fad9788aa6";

class RecipesStore {
    @observable recipes = [];

    @action async fetchRecipes() {
        try {
            const response =  await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=25`)
            const data  =  await response.json();
            this.recipes =  data.results.map((result) => ({
                id: result.id,
                title: result.title,
                image: result.image,
            }));
        }catch(error){
            console.error(error);
        }
    }
}

export const recipesStore = new RecipesStore();