import AddRecipeForm from "./components/AddRecipeForm"
import RecipeDetails from "./components/RecipeDetails"
import RecipeList from "./components/RecipeList"
import { createBrowserRouter, Link } from "react-router-dom"
import RecommendationsList from "./components/RecommendationsList"
import FavoritesList from "./components/FavoritesList"

export const Routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "recipeList/", element: <RecipeList /> },
  { path: "favorites/", element: <FavoritesList /> },
  { path: "recipe/:recipeID", element: <RecipeDetails /> },
  { path: "recommendations/", element: <RecommendationsList /> }
])
function App() {

  return (
    <div>
      <Link to={'recipeList'}>
        Recipe List
      </Link>
      <Link to={'favorites'}>
        Favorites
      </Link>
      <Link to={'recommendations'}>
        Recommendations
      </Link>
      <AddRecipeForm />
      <RecommendationsList />
    </div>
  )
}

export default App
