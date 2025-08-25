import React from 'react'
import Link from 'next/link'

const RecipeCard = ({recipe}) => {

  return (
    <div className='bg-white rounded-[10px] shadow-sm relative h-auto flex flex-col p-2'>
        <div className='text-primary'>
            <img src={recipe.image.small} alt={recipe.title} className='rounded-md w-full' />
            <div className='my-4'>
                <h3 className='text-xl font-bold truncate' title={recipe.title}>{recipe.title}</h3>
                <p className='text-secondary text-base'>{recipe.overview}</p>
                <div className='flex flex-wrap gap-4 my-4'>
                    <span className='flex items-center'><img src="/images/icons/icon-servings.svg" alt="" />Servings: {recipe.servings}</span>
                    <span className='flex items-center'><img src="/images/icons/icon-prep-time.svg" alt="" />Prep time: {recipe.prepMinutes} mins</span>
                    <span className='flex items-center'><img src="/images/icons/icon-cook-time.svg" alt="" />Cook: {recipe.cookMinutes} mins</span>
                </div>
            </div>
        </div>
         <Link href={`/recipes/${recipe.slug}`} className='bg-primary flex items-center justify-center w-full rounded-full h-12 text-white mt-auto'>View Recipe</Link>
    </div>
  )
}

export default RecipeCard