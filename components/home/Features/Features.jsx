import React from 'react'
import FeaturesCard from './FeaturesCard'

const Features = () => {
  return (
    <section className='border-b border-secondary/10 pb-24'>
        <h2 className='text-primary text-[40px] md:text-5xl font-extrabold text-left lg:text-center mb-12'>What you’ll get</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>
            <FeaturesCard
            imageUrl={"/images/icons/icon-whole-food-recipes.svg"}
            title={"Whole Food Recipes"}
            description={"Each dish uses everyday, unprocessed ingredients."}
            />
            <FeaturesCard
            imageUrl={"/images/icons/icon-minimum-fuss.svg"}
            title={"Minimum fuss"}
            description={"All recipes are designed to make eating healthy quick and easy."}
            />
            <FeaturesCard
            imageUrl={"/images/icons/icon-search-in-seconds.svg"}
            title={"Search in seconds"}
            description={"Filter by name or ingredient and jump straight to the recipe you need."}
            />
        </div>
    </section>
    
  )
}

export default Features