import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createRecipe  } from "../services/recipes";

export default function RecipeCreate() {
  const [recipe, setRecipe] = useState({
    label: "",
    source: "",
    method: "",
    ingredientLines: [],
    dietLabels: [],
    healthLabels: [],
  });

  let navigate = useNavigate();
  let { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRecipe(recipe);
    navigate(`/recipe/${recipe._id}`, { replace: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="create">
      <h1>Recipe Create Screen</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe name"
          name="label"
          value={recipe.label}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="Ingrediant"
          name="source"
          value={recipe.source}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrediant"
          name="method"
          value={recipe.method}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          placeholder="Ingrediant"
          name="method"
          value={recipe.method}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrediant"
          name="method"
          value={recipe.method}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrediant"
          name="method"
          value={recipe.method}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          placeholder="Ingrediant"
          name="method"
          value={recipe.method}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrediant"
          name="method"
          value={recipe.method}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrediant"
          name="method"
          value={recipe.method}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrediant"
          name="method"
          value={recipe.method}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <button>submit</button>
      </form>
    </div>
  );
}
