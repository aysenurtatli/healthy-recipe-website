import React from 'react'
import recipes from '@/data/data.json'
import RecipeDetails from '@/components/recipes/RecipeDetails';
import MoreRecipes from '@/components/recipes/MoreRecipes';
import Link from 'next/link';

const page = ({params}) => {
   const {slug} = params;
   const recipe = recipes.find((i) => i.slug === slug);


  return (
    <div className='px-4 md:px-8'>
      <section className='my-12 border-b border-secondary/10 pb-24'>
      <Link href={"/recipes"}>
         <p className='text-secondary font-semibold my-4 inline-block'>Recipes / 
        </p>
      </Link>
       <span className='text-primary'> {recipe.title}</span>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
          <img src={recipe.image.large} alt={recipe.title} className='rounded-[10px]' />
        <div>
          <h2 className='text-[40px] text-5xl text-primary font-extrabold'>{recipe.title}</h2>
          <p className='text-secondary text-xl my-5'>{recipe.overview}</p>
          <div className='flex flex-wrap gap-4 text-primary'>
              <span className='flex items-center'><img src="/images/icons/icon-servings.svg" alt="" />Servings: {recipe.servings}</span>
              <span className='flex items-center'><img src="/images/icons/icon-prep-time.svg" alt="" />Prep time: {recipe.prepMinutes} mins</span>
              <span className='flex items-center'><img src="/images/icons/icon-cook-time.svg" alt="" />Cook: {recipe.cookMinutes} mins</span>
            </div>
          <RecipeDetails title={"Ingredients"} items={recipe.ingredients}/>
          <RecipeDetails title={"Instructions"} items={recipe.instructions}/>
        </div>
      </div>
      </section>
      <MoreRecipes recipes={recipes} currentSlug={recipe.slug} />
    </div>
    
   
  )
}

export default page