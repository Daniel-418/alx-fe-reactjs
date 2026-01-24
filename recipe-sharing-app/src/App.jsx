import AddRecipeForm from "./components/AddRecipeForm"
import RecipeDetails from "./components/RecipeDetails"
import RecipeList from "./components/RecipeList"
import { createBrowserRouter, Link } from "react-router-dom"

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "recipeList/", element: <RecipeList /> },
  { path: "recipe/:recipeID", element: <RecipeDetails /> }
])
function App() {

  return (
    <div>
      <Link to={'recipeList'}>
        Recipe List
      </Link>
      <AddRecipeForm />
    </div>
  )
}

export default App
