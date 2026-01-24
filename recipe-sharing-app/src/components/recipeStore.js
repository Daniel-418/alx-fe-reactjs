import { create } from "zustand";
const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id)
  })),
  updateRecipe: (id, title, description) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, title: title, description: description } : recipe),
  })),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
  }))
}));
export default useRecipeStore
