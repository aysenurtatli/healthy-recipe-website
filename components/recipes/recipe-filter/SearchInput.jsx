import React from 'react'

const SearchInput = ({value, onChange}) => {
  return (
    <input 
        type="text"
        placeholder='Search by name or ingredient…'
        className='w-full md:w-[310px] text-lg rounded-lg border-1 border-secondary/20 px-4 py-2 bg-white text-gray-700 font-medium shadow-sm focus:outline-primary'
        value={value}
        onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default SearchInput