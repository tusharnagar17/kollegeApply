"use client"
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='shadow-md'>
        <div className='py-4 md:max-w-7xl mx-auto hidden md:flex justify-between align-center px-2'>

          <div className='flex gap-8 items-center'>
              <div>
                <Image src='/image/logo.png' height={100} width={100} alt='KollegApply' /></div>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">University</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Colleges</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Exams</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Courses</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">News</a>
          </div>
          <div className='flex justify-center item-center gap-2'>
              <CiSearch size={25} />
              <input type="text" name="search-input" id="search-input" placeholder='Search for College, Exam, Courses & more..' />
          </div>
        </div>

        <div className='flex justify-between px-4 items-center py-4 md:hidden'>
          <div><Image src='/image/logo.png' height={100} width={100} alt='KollegApply' /></div>
          <div onClick={()=> setShowMenu(prev => !prev)}><RxHamburgerMenu size={20}  /> </div>
        </div>
        {
          showMenu ? (<div id="mobile-menu" class="md:hidden menu-hidden text-center">
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">University</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Colleges</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Exams</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Courses</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">News</a>
        </div>) : (<></>)
        }
        
    </div>
    
  )
}

export default NavBar