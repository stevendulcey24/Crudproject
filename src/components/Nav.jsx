import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
 <nav className='nav'>
  <div>
 <Link to="/">Home</Link> 
 </div>
<br></br>
<Link to="/recipes">All Recipes</Link>
<br></br>
<Link to="/RecipeCreate/:id/create">Create Recipe</Link>
<br></br>
<div className = "edit">
<Link to="/recipes/:id">Edit Recipe</Link>
</div>




    </nav>
  )
}
