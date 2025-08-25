import React from 'react'

const RecipeDetails = ({title, items}) => {
  return (
    <section className='my-5'>
        <h3 className='text-2xl text-primary font-bold mb-4'>{title}</h3>
        <ul className='text-secondary'>
        {items.map((item, index) => (
            <li key={index} className='flex  gap-2'>
                <img src="/images/icons/icon-bullet-point.svg" className='w-6 h-6'  />
                  {item}
            </li>
        ))}
        </ul>
    </section>
  )
}

export default RecipeDetails