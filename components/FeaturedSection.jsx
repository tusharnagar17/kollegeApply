import React from 'react'

const ShortDetail = (props) => {
    const {details} = props
    console.log("heading", details)
    return (<div className='my-6'>
        <div className='text-sm font-semibold'>{details.heading}...</div>
        <div className='text-sm my-1'>{details.detail}...</div>
        <div className='text-sm text-gray-500 my-2'>{details.time}</div>
    </div>)
}

const data = [
    {
        heading: "What is the larget program that you are offering in your institute",
        detail: 'Lucknow Public College of Professional Studies',
        time: '27 Dec 2020',
    },
    {
        heading: "What is the larget program that you are offering in your institute",
        detail: 'Lucknow Public College of Professional Studies',
        time: '27 Dec 2020',
    },
    {
        heading: "What is the larget program that you are offering in your institute",
        detail: 'Lucknow Public College of Professional Studies',
        time: '27 Dec 2020',
    }
]

const FeaturedSection = () => {
  return (
    <div className='mx-2 max-w-7xl md:mx-auto border-2 border-yellow-400 bg-yellow-50/50 p-6 rounded-xl '>
        <div className='text-2xl text-yellow-400 my-2 font-semibold'>FEATURED NEWS</div>
        <div className='md:flex gap-4'>
            {data.map((item, index)=> {
                return <ShortDetail details={item} key={index} />
            })}
        </div>
    </div>
  )
}

export default FeaturedSection