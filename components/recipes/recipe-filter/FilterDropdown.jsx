"use client"
import React from 'react'
import { useState } from 'react';

const FilterDropdown = ({label, options, value, onChange, }) => {
  const [open, setOpen] = useState(false);
  return (
     <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-between w-full lg:w-48  text-lg rounded-lg border-1 border-secondary/20 px-4 py-2 bg-white text-gray-700 font-medium shadow-sm cursor-pointer focus:border-primary hover:border-primary duration-300"
      >
        {label}
       <img src="/images/icons/icon-chevron-down.svg" alt="" />
      </button>
      {open && (
        <div className="absolute mt-2 w-56 rounded-lg shadow-sm bg-white border-1 border-secondary/20 z-10">
          <div className="py-2">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="radio"
                  name={label}
                  checked={value === option}
                  onChange={() => onChange(option)}
                  className="mr-2"
                />
                {option} minutes
              </label>
            ))}

            <button
              className="px-4 py-2 text-sm text-primary hover:underline"
              onClick={() => onChange(null)}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterDropdown