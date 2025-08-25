import React from 'react'

const StorySection = ({items, title}) => {

  return (
    <section className='mt-20 border-b border-secondary/10 pb-24'>
        <h2 className='text-primary text-[40px] lg:text-5xl font-extrabold mb-10'>{title}</h2>
        <ul className='flex flex-col gap-8'>
           {items.map((item, i) => (
            <li key={i}>
                <div className='flex items-start gap-5'>
                    <img src="/images/icons/icon-bullet-point.svg"  />
                    <div>
                        <h3 className='text-2xl font-bold mb-3 text-primary'>{item.title}</h3>
                        <p className='text-xl text-secondary'>{item.description}</p>
                    </div>
                </div>
            </li>
           ))}
        </ul>
    </section>
  )
}

export default StorySection