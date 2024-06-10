"use client"
import React, { useState } from 'react'
import { MdElectricBolt } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SideBar from './NewsSection';

const Latest = {
  image: '/image/main.png',
  heading: "Chitkara University MBA Admission Open; Check Direct List...",
  date: "20 Sep 2023, 8:00pm",
  detail: "New Delhi: The State Common Entrance Test Cell, Government of Maharashtra, has issued the admit cards for the March, MHMCT, BEd, MEd and MPEd Courses on February 27, 2024. To download the documents"
}



const HeroSection = () => {

  const router = useRouter();
  // const [isRouterReady, setIsRouterReady] = useState(false);

  // useEffect(() => {
  //   if (router.isReady) {
  //     setIsRouterReady(true);
  //   }
  // }, [router.isReady]);

  // const handleClick = (e) => {
  //   if (isRouterReady) {
  //     router.push('/some-page'); // Replace with your desired route
  //   }
  // };

  return (
    <div className='bg-slate-100 py-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='md:flex gap-16 justify-between'>
        <div className='md:w-2/3 w-full'>
          <Trending news={"CBSE Class 12 Physics Question Paper 2024 Set 3"}
            link={"tusharnagar"}
          />
          <div className='bg-white p-4 my-4 rounded-xl'
            onClick={()=> {router.push('/detailpage')}}
          >
            
            <div className=''><Image src={Latest.image} height={300} width={300} alt="Main Image" className='w-full' /></div>
            <div className='text-3xl my-2 font-semibold'>
              {Latest.heading}
            </div>
            <div className='text-md text-gray-500 font-semibold'>{Latest.date}</div>
            <div>{Latest.detail}...{<span className='text-violet-500 font-bold'>Check Now</span>}</div>
          </div>
        </div>
        <div className='md:w-1/3 my-2 p-2'>
          <SideBar />
        </div>
        </div>
      </div>
    </div>
  )
}

const Trending = ({news, link}) => {
  return <div className='max-w-2xl flex gap-2 justify-between border-[1.5px] border-violet-400 bg-violet-50 rounded-lg p-2 text-sm'>
    <div className='flex items-center gap-1 flex-wrap '>
   
    <div className='font-semibold flex items-center'>
    <MdElectricBolt className='text-yellow-400' size={20} /> 
      Trending Now:{" "} {news}</div>
    
    </div>
    <div className='text-violet-500 font-semibold flex flex-wrap items-center gap-2'><a href={link} target='blank'>Check Now</a> <FaLongArrowAltRight /></div>
  </div>
}



export default HeroSection