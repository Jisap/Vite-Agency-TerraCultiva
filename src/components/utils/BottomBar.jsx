import React from 'react'

const BottomBar = ({ title }) => {
  return (
    <div className='mt-20 w-full pt-10 border-t border-zinc-100 justify-between items-center text-sm font-medium capitalize text-zinc-400'>
      <span>
        {title ? title : "Section Title Here"}
      </span>

      <span className='text-green-900 md:text-lg lg:text-xl lg:tracking-wide space-font font-normal'>
        Terra Cultiva
      </span>

      <span>©{new Date().getFullYear()}</span>
    </div>
  )
}

export default BottomBar