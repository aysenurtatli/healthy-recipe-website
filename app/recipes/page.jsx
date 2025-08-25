import Header from '@/components/home/Header'
import RecipeList from '@/components/recipes/RecipeList'
import React from 'react'

const page = () => {
  return (
    <div className='px-4 md:px-8'>
        <header className='flex flex-col items-baseline lg:items-center justify-center gap-3 my-20'>
            <h2 className='text-[40px] text-primary md:text-5xl font-extrabold'>Explore our simple, healthy recipes</h2>
            <p className='text-xl text-secondary font-medium text-left lg:text-center'>Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
        </header>
        <RecipeList />
    </div>
  )
}

export default page