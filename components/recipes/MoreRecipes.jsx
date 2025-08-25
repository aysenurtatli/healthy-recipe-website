import React from 'react'
import RecipeCard from './RecipeCard'

const MoreRecipes = ({recipes, currentSlug}) => {
    const filtered = recipes.filter((recipe) => recipe.slug !== currentSlug)
    const threeRecipes = filtered.slice(0,3);
    console.log(threeRecipes)
  return (
    <section className='border-b border-secondary/10 pb-24'>
        <h2 className='text-[32px] font-bold text-primary mb-6'>More recipes</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {threeRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe}  />
            ))}
        </div>
       
    </section>
  )
}

export default MoreRecipes