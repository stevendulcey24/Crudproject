import { useState, useEffect } from "react";
import { deleteRecipe, getRecipe } from "../services/recipes";
import { Link, useParams, useNavigate } from "react-router-dom";



export default function RecipeDetail() {
  const [Recipe, setRecipe] = useState({});

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchRecipe();
  }, []);

  async function fetchRecipe() {
    let oneRecipe = await getRecipe(id);
    setRecipe(oneRecipe);
  }

  async function handleDelete() {
    await deleteRecipe(id);
    navigate("/recipes", { replace: true });
  }

  console.log(Recipe.label)


  return (
    <div>
        <div className="list">
      <h2>{Recipe.label}</h2> 
      <p>{Recipe.label}</p>
      <p>{Recipe.source}</p>
      <p>{Recipe.method}</p>
      <p>{Recipe.ingrediantLines}</p>
      </div>
    
      <div className="delete">
        <Link to={`/recipes/${Recipe._id}/edit`}>
          <button className = "ebutton">Edit Recipe</button>
        </Link>
        <button className = "dbutton" onClick={handleDelete}>Destroy Recipe!</button>
      </div>
    </div>
  );
  
}