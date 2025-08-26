"use client"
import React, { useState } from 'react'
import Link from 'next/link'


import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Recipes", path: "/recipes" },]

  return (
    <>
    <div className="flex items-center justify-between bg-neutral-100 text-primary shadow-xs shadow-secondary/10 px-[15px] md:px-[30px] lg:px-[60px] py-[20px]">
      <Link href={"/"}>
       <img src="/logo.svg" alt="logo" className='w-auto'/>
      </Link>
      <nav className='hidden lg:flex gap-[40px] font-semibold text-lg'>
          {links.map((link) => (
            <Link href={link.path} key={link.name} className={`${pathname === link.path ? "border-b-2 border-orange-300" : ""}`}>
              {link.name}
            </Link>
          ))}
      </nav>
      <Link href={"/recipes"}>
       <button className='hidden lg:block bg-primary cursor-pointer text-white px-4 h-[52px] text-[20px] rounded-[10px]'>Browse recipes</button>
      </Link>
      <button
          className="lg:hidden p-2 bg-[#E0E6E3] w-10 h-10 flex items-center justify-center rounded-sm"
          onClick={() => setMenuOpen(!menuOpen)}
        >
           <img src="/images/icons/icon-hamburger-menu.svg" alt="" />
        </button>
    </div>
    {menuOpen && (
        <div className="lg:hidden bg-white text-primary shadow-sm rounded-md mx-4 mt-2 p-4 flex flex-col gap-3 font-semibold text-lg">
          {links.map((link) => (
            <Link href={link.path} key={link.name}  onClick={() => setMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link href={"/recipes"}>
            <button className="bg-primary cursor-pointer mt-2 text-white rounded-[10px] w-full h-[52px]">Browse recipes</button>
          </Link>
        </div>
      )}
    </>
   
    
  )
}

export default Navbar