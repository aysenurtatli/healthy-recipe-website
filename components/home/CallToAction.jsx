import React from 'react'
import Button from '../Button'
import Link from 'next/link'

const CallToAction = () => {
  return (
 <section className="bg-[#E9EDE8] relative h-[396px] flex flex-col items-center justify-center text-center rounded-2xl px-4 z-20 overflow-hidden">
  <img 
    src="/images/patterns/pattern-fork.svg" 
    alt="fork pattern" 
    className="hidden md:block absolute w-[186px] lg:w-auto -left-10 lg:-left-20  -bottom-10 -z-10" 
  />

  <div className="max-w-2xl">
    <h2 className="text-primary text-[40px] md:text-5xl font-extrabold mb-5 leading-snug">
      Ready to cook smarter?
    </h2>
    <p className="text-secondary text-xl mb-6">
      Hit the button, pick a recipe, and get dinner on the table—fast.
    </p>
    <Link href={"/recipes"}>
     <Button btnText={"Browse recipes"} />
    </Link>
  </div>
  <img 
    src="/images/patterns/pattern-knife.svg" 
    alt="knife pattern" 
    className="hidden md:block absolute w-[186px] lg:w-auto -right-10 lg:-right-20 top-10 -z-10" 
  />
</section>

  )
}

export default CallToAction