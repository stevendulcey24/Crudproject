import React from 'react'
import {Link} from 'react-router-dom'

export default function Recipe({recipe}) {
  return (
    <div>
      <Link to={`/recipes/${recipe._id}`}>
        <h1>{recipe.label}</h1>
      </Link>
        
    </div>
  )
}
