import { useState } from "react"
import Image from "next/image"

const Temp = [
    { 
      image: '/image/10.png',
      heading: "What is the largest program that you are offering in your institute",
      detail: 'Lucknow Public College of Professional Studies',
      date: "27 Dec 2020"
    },
    { 
      image: '/image/11.png',
      heading: "What is the largest program that you are offering in your institute",
      detail: 'Lucknow Public College of Professional Studies',
      date: "27 Dec 2020"
    },
    { 
      image: '/image/12.png',
      heading: "What is the largest program that you are offering in your institute",
      detail: 'Lucknow Public College of Professional Studies',
      date: "27 Dec 2020"
    },
    { 
      image: '/image/13.png',
      heading: "What is the largest program that you are offering in your institute",
      detail: 'Lucknow Public College of Professional Studies',
      date: "27 Dec 2020"
    },
  ]

const SideBar = ({showList}) => {
    const options = ["All News", "Admission Alert", "College News", "Exam News", "Latest News"]
    const [optionSelected, setOptionSelected] = useState('All News')
  
    return (
      <div>
        {showList ? (<div className='flex items-center flex-wrap gap-2'>
          {/* Options */}
          {options.map((item, index)=> {
            return <div key={index} 
              
              className={`px-2 py-1 text-sm  rounded-3xl bg-white ${optionSelected == item ? "bg-violet-200 font-semibold": ""}`}
              onClick={()=> setOptionSelected(item)}
              >
              {item}
            </div>
          })}
        </div>): (<></>)}
        
  
        <div className='p-2 bg-white my-4 rounded-xl'>
          <div className='text-violet-600 font-bold text-2xl my-2 '>THE BIG STORIES</div>
          <div>{
            Temp.map((item, index)=> {
              return (
              <div className={`${index == Temp.length -1 ? '' : 'border-b-2 border-gray-400'}`} >
                <div className='flex items-center my-4  gap-4' key={index}>
                  <div><Image src={item.image} height={250} width={250} className='object-contain rounded-xl' /></div>
                  <div>
                    <div className='text-sm font-semibold'>{item.heading}...</div>
                    <div className='text-sm my-1'>{item.detail}...</div>
                    <div className='text-sm font-semibold text-gray-500'>{item.date}</div>
                  </div>
                </div>
              </div>)
              })}
            </div>
        </div>
    </div>)
  }

export default SideBar;