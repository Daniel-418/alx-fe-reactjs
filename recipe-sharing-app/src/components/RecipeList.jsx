import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import SearchBar from "./SearchBar";
import { useEffect } from "react";

export default function RecipeList() {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  useEffect(() => filterRecipes(), []);

  return (
    <div>
      <SearchBar />
      <Link to={'/'}>home</Link>
      {recipes.length > 0 ? <h3>Recipes:</h3> : ''}
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <p>{recipe.id}</p>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>see recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
