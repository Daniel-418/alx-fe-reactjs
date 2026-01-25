import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore"
import { useShallow } from "zustand/shallow";

export default function FavoritesList() {
  const favorites = useRecipeStore(useShallow(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id == id)
  )));

  return (
    <div>
      <h2>My favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export function AddFavoriteButton({ recipeID }) {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    addFavorite(recipeID);
    navigate('/favorites');
  }

  return (
    <button onClick={handleClick} type="button">Add to favourites</button>
  )
}
