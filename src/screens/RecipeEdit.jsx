// this file is no longer being used 

import {useState, useEffect} from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getRecipe, deleteRecipe } from '../services/recipes';

export default function RecipeEdit() {
    const [Recipe, setRecipe] = useState({});

  let { id } = useParams();
  let Navigate = useNavigate();

  useEffect(() => {
    fetchRecipe();
  }, []);

  async function fetchRecipe() {
    let oneRecipe = await getRecipe(id);
    setRecipe(oneRecipe);
    async function handleDelete() {
        await deleteRecipe(id);
        Navigate("/recipes", { replace: true });
      }

console.log(Recipe)

  }
  return (
    <div>
      <h2>{Recipe.label}</h2> 
      <div>
        <Link to={`/recipes/${Recipe._id}/edit`}>
          <button>Edit Recipe</button>
        </Link>
        {/* <button onClick={handleDelete}>Destroy Recipe!</button> */}
      </div>
    </div>
    
  )
}
