import React from 'react'
import Button from '../Button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex flex-col items-baseline lg:items-center justify-center'>
    <div>
     <h1 className="text-primary text-[64px] md:text-7xl font-extrabold">
      <span className="relative inline-block z-10">
      Healthy
        <span className="absolute left-0 bottom-0 w-full h-[39px] bg-orange-200 rounded-sm -z-3"></span>
      </span>{" "} meals, zero fuss
     </h1>
    </div>
      <p className='text-secondary font-medium text-xl mt-3 mb-10'>Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.</p>
      <Link href={"/recipes"}>
       <Button btnText={"Start exploring"} />
      </Link>
    </header>
  )
}

export default Header