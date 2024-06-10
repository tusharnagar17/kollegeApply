"use client"
import { list } from 'postcss'
import React, { useState } from 'react'
import { RxStopwatch } from "react-icons/rx";
import Image from 'next/image';

const List = ["All News", "College News", "Exam News", "Admission 2024"]



const Data = [
  {
    image: '/image/1.png',
    heading: "What is the largest program that you are offereing in your institute",
    detail: "Lucknow Public College of Professional Studies is the largest program that you are offereing in your institute",
    date: "27 Dec 2020"
  },  
  {
    image: '/image/2.png',
    heading: "What is the largest program that you are offereing in your institute",
    detail: "Lucknow Public College of Professional Studies is the largest program that you are offereing in your institute",
    date: "27 Dec 2020"
  },
  {
    image: '/image/3.png',
    heading: "What is the largest program that you are offereing in your institute",
    detail: "Lucknow Public College of Professional Studies is the largest program that you are offereing in your institute",
    date: "27 Dec 2020"
  },
  {
    image: '/image/4.png',
    heading: "What is the largest program that you are offereing in your institute",
    detail: "Lucknow Public College of Professional Studies is the largest program that you are offereing in your institute",
    date: "27 Dec 2020"
  },
]


const ListSection = () => {
    const [options, setOptions] = useState('Admission 2024')
    return (
    <div className='bg-violet-50 py-6 '>
      <div className='max-w-7xl mx-auto'>

        <div className='flex items-center justify-around bg-white py-2 px-10 my-6
        w-1/2 mx-auto rounded-xl'>
          {List.map((item, index)=> {
            return <div onClick={()=>{setOptions(item)}} className={`font-semibold ${options == item ? 'text-violet-600 underline outline-offset-4 font-bold': ''}`} key={index}>{item}</div>
          })}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 px-2 lg:grid-cols-4 gap-4'>
          {Data.map((item, index)=> {
            return <ListItem data={item} />
          })}
          {Data.map((item, index)=> {
            return <ListItem data={item} />
          })}
          {Data.map((item, index)=> {
            return <ListItem data={item} />
          })}
        </div>
      </div>
    </div>
  )
}

const ListItem = (props) => {
  return <div className='bg-white p-2 rounded-xl'>
    <div>
      <Image src={`${props.data.image}`} 
      width={300}
      height={300}
      className='object-fill w-full'
      alt="Picture of the author"
       />
    </div>
    <div className='my-2 font-semibold text-sm'>{props.data.heading.slice(0, 70)}...</div>
    <div className='my-2 text-sm'>{props.data.detail.slice(0, 70)}...</div>
    <div className='flex my-1 items-center justify-start gap-2 text-gray-400 text-sm font-semibold'><RxStopwatch size={20} /> {props.data.date}</div>
    </div>
}

export default ListSection