import React from 'react'

const FeaturesCard = ({ imageUrl, alt, title, description }) => {
  return (
    <div className=" text-primary items-baseline">
        <figure>
            <div className='bg-white h-[60px] w-[60px] flex items-center justify-center rounded-xl shadow-sm mb-6'>
                <img
                    src={imageUrl}
                    alt={alt}
                    className="rounded-xl" 
                />
            </div>
        </figure>
        <div>
            <h2 className="card-title font-bold mb-3 text-[32px]">{title}</h2>
            <p className='text-xl text-secondary font-medium'>{description}</p>
        </div>
    </div>
  )
}

export default FeaturesCard