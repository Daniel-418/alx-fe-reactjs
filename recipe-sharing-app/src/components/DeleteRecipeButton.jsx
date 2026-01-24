import { useNavigate } from "react-router-dom"
import useRecipeStore from "./recipeStore"

export default function DeleteRecipe({ recipeID }) {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
  const navigate = useNavigate();
  const handler = (e) => {
    e.preventDefault();
    deleteRecipe(recipeID);
    navigate("/recipeList");
  }
  return (
    <button type="button" onClick={handler}>
      Delete
    </button>
  )
}
