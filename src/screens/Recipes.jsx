import { useEffect, useState } from "react";
import { getRecipes } from "../services/recipes.js";
import Recipe from "../components/Recipe.jsx";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipe();
  }, []);

  async function fetchRecipe() {
    const allRecipes = await getRecipes();
    setRecipes(allRecipes);
  }

  return (
    <div className="all">
      <h1>All Recipes</h1>
      {recipes.map((rescipeData) => (
        <Recipe recipe={rescipeData} key={rescipeData._id} />
      ))}
    </div>
  );
}
