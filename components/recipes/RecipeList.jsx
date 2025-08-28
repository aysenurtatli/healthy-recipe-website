"use client"
import React, { useState } from 'react'
import RecipeCard from './RecipeCard'
import recipes from "@/data/data.json"
import RecipeFilter from './RecipeFilter'

const RecipeList = () => {
  const [filters, setFilters] = useState({
    maxPrepTime: null,
    maxCookTime: null,
    search: "",
  })

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesPrep = !filters.maxPrepTime || recipe.prepMinutes <= filters.maxPrepTime;
    const matchesCook = !filters.maxCookTime || recipe.cookMinutes <= filters.maxCookTime;
    const matchesSearch = recipe.title.toLowerCase().includes(filters.search.toLowerCase())
    return matchesPrep && matchesCook && matchesSearch
  })

  return (
    <>
      <RecipeFilter filters={filters} setFilters={setFilters} />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">No recipes found</p>
          )}
      </div>
    </>
   
  )
}

export default RecipeList