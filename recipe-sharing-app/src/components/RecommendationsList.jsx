import { useEffect } from "react";
import useRecipeStore from "./recipeStore";

export default function RecommendationsList() {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => { generateRecommendations() }, []);

  return (
    <div>
      {recommendations.length > 0 ? <h3>Recommendations</h3> : ''}
      {recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))
      }
    </div >
  )
}
