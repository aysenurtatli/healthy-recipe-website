import React from 'react'
import RecipeCard from './RecipeCard'
import recipes from "@/data/data.json"

const RecipeList = () => {

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {recipes.map((recipe) => (
         <RecipeCard key={recipe.id} recipe={recipe}  />
        ))}
    </div>
  )
}

export default RecipeList