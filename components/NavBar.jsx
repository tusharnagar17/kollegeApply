import React from 'react'
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className='shadow-md'>
        <div className='max-w-full py-4 md:max-w-7xl mx-auto flex justify-between align-center px-2'>
        <div className='flex gap-8'>
            <div>kollegeApply</div>
            <div>University</div>
            <div>Colleges</div>
            <div>Exams</div>
            <div>Courses</div>
            <div>News</div>
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