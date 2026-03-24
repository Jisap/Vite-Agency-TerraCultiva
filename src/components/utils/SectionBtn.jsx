import React from 'react'

const SectionBtn = ({ title }) => {
  return (
    <div className='bg-green-800 text-white px-8 py-3 lg:py-4 rounded-full text-sm tracking-wider cursor-pointer hover:bg-green-950 transition-all duration-150 ease-in hover:-translate-y-1'>
      {title ? title : "Section Title"}
    </div>
  )
}

export default SectionBtn