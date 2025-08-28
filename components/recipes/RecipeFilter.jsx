import React from 'react'
import FilterDropdown from './recipe-filter/FilterDropdown'
import SearchInput from './recipe-filter/SearchInput'

const RecipeFilter = ({filters, setFilters}) => {
  return (
      <div className="my-6 flex flex-col md:flex-row gap-4 justify-between">
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        <FilterDropdown 
            label="Max Prep Time" 
            options={[0, 5, 10]} 
            className="w-full md:w-auto"
            value={filters.maxPrepTime}
            onChange={(val) => setFilters(prev => ({ ...prev, maxPrepTime: val }))}
        />
        <FilterDropdown 
            label="Max Cook Time"
            options={[0, 5, 10, 15, 20]}
            className="w-full md:w-auto"
            value={filters.maxCookTime}
            onChange={(val) => setFilters(prev => ({ ...prev, maxCookTime: val }))}
        />
      </div>
      <div className="w-full md:w-auto">
        <SearchInput 
            value={filters.search}
            onChange={(val) => setFilters(prev => ({ ...prev, search: val }))} 
        />
      </div>
    </div>
  )
}

export default RecipeFilter