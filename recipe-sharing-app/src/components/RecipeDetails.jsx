import { useParams } from "react-router-dom";
import DeleteRecipe from "./DeleteRecipeButton.jsx";
import EditRecipeForm from "./EditRecipeForm";
import useRecipeStore from "./recipeStore";

export default function RecipeDetails() {
  const { recipeID } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === Number(recipeID)))

  if (!recipe) {
    return <h2>Recipe not found (or deleted)...</h2>
  }
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipeID={Number(recipeID)} />
      <DeleteRecipe recipeID={Number(recipeID)} />
    </div>
  );
};
