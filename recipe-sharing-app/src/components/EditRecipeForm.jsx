import { useState } from "react";
import useRecipeStore from "./recipeStore";

export default function EditRecipeForm({ recipeID }) {

  const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === recipeID))
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore(state => state.updateRecipe)
  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipeID, title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="enter updated title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="enter updated description"
      />
      <button type="submit">Edit Recipe</button>
    </form>
  )
}
