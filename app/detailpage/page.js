"use client"
import React from 'react'
import Image from 'next/image'
import SideBar from '@/components/NewsSection'

const Data = {
  image: '/image/main.png', 
  heading: "Chitkara University MBA Admission Open; Check Direct List...",
  details: "We offer a diverse range of extracurricular activities aimed at enhancing personal growth, skill development, and building lasting connections. From cultural events to sports, competitions, and workshops, students have ample opportunities to refine their communication and critical thinking abilities while pursuing their passions. As individuals with dual responsibilities towards the institute and its students, our primary objective is to cultivate an enriching learning environment. We contribute to the institute by delivering high-quality education, aligning with institutional goals, and promoting a positive academic atmosphere. Towards students, we act as facilitators of learning, providing support, mentorship, and guidance for their intellectual, social, and emotional growth. Graduates from our institute, particularly those in nursing, have a wide array of career opportunities. With essential clinical skills, specialization options, and global practice opportunities, they are well-equipped for rewarding careers dedicated to improving health and well-being while making a meaningful impact on communities worldwide.  The paramount strength of our institute lies in its ability to provide a transformative educational experience. With robust academic programs, committed faculty, and abundant resources, we empower students to cultivate critical thinking, broaden their knowledge, and become well-rounded, educated citizens prepared to make significant contributions to society. To the youth and aspiring students, I encourage adopting a growth mindset, setting clear goals, and mastering effective time management. Nurture curiosity, seek mentorship, and prioritize well-being while remaining adaptable in a rapidly evolving world. Remember, success is a continuous journey—embrace the process, seize opportunities, and never stop learning. To the youth and aspiring students, I encourage adopting a growth mindset, setting clear goals, and mastering effective time management. Nurture curiosity, seek mentorship, and prioritize well-being while remaining adaptable in a rapidly evolving world. Remember, success is a continuous journey—embrace the process, seize opportunities, and never stop learning.",
  date: "20 Sept 2023 8:00 pm"
}

const DetailPage = () => {
  return (
    <div className='bg-violet-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-sm py-2 px-2'>News Listing Page {">"} <span className='text-violet-500 font-semibold'>Individual News</span></div>
        <div className='md:flex justify-between gap-4'>
          <div className='md:w-2/3 bg:white p-4 bg-white shadow-sm'>
            <Image src={Data.image} width={300} height={150} alt="Chitkara University image" className='w-full object-contain' />
            <div className='text-2xl my-2 font-semibold'>{Data.heading}</div>
            <div className='text-md text-gray-500 font-semibold'>{Data.date}</div>
            <div>{splitByCharacters(Data.details, 300).map((sentence, index) => (
              <p className='my-2 text-sm' key={index}>{sentence}.
              </p>
            ))}</div>
          </div>
          <div className='md:w-1/3'>
            <div>
              <div className='w-full bg-[#40347C] my-2 py-4 text-center font-semibold text-white rounded-xl'>Apply Now</div>
              <div className='w-full bg-[#D3CCF5] my-2 py-4 text-center font-semibold rounded-xl'>Download Brochure</div>
            </div>
            <div>
              <div className='w-full py-8 bg-yellow-100 text-center rounded-xl my-2'>Advertisement Banner</div>
              <div className='w-full py-8 bg-blue-100 text-center rounded-xl my-2'>Advertisement Banner</div>
              <div className='w-full py-8 bg-green-100 text-center rounded-xl my-2'>Advertisement Banner</div>
            </div>
            <SideBar showList={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

function splitByCharacters(text, charLimit) {
  const sentences = [];
  let sentence = '';

  for (let char of text) {
    if (sentence.length + char.length <= charLimit) {
      sentence += char;
    } else {
      sentences.push(sentence.trim());
      sentence = char;
    }

    // If a full stop is encountered and sentence length exceeds charLimit, push the sentence
    if (char === '.') {
      if (sentence.length > charLimit) {
        sentences.push(sentence.trim());
        sentence = '';
      }
    }
  }

  if (sentence.length > 0) {
    sentences.push(sentence.trim());
  }

  return sentences;
}

export default DetailPage