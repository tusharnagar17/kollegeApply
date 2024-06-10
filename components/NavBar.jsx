import React from 'react'
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className='shadow-md'>
        <div className='max-w-full py-4 md:max-w-7xl mx-auto flex justify-between align-center px-2'>
        <div className='flex gap-8 items-center'>
            <div><Image src='/image/logo.png' height={100} width={100} alt='KollegApply' /></div>
            <div className='hover:underline hover:text-violet-500'>University</div>
            <div className='hover:underline hover:text-violet-500'>Colleges</div>
            <div className='hover:underline hover:text-violet-500'>Exams</div>
            <div className='hover:underline hover:text-violet-500'>Courses</div>
            <div className='hover:underline hover:text-violet-500'>News</div>
        </div>
        <div className='flex justify-center item-center gap-2'>
            <CiSearch size={25} />
            <input type="text" name="search-input" id="search-input" placeholder='Search for College, Exam, Courses & more..' />
        </div>
     </div>
    </div>
  )
}

export default NavBar