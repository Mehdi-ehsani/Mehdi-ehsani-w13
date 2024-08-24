import React from 'react'

const Card = ({price , title , img , date}) => {
  return (
    <div className='border-2 bg-gray-100 border-gray-200 flex flex-col xl:flex-row rounded-xl overflow-hidden shadow-sm'>
        <img className='xl:w-56 w-full xl:h-56 h-48' src={img} />
        <div className='w-full m-4 flex flex-col justify-between' dir='rtl'>
            <h3 className='xl:text-3xl text-2xl'>{title}</h3>
            <div>
            <p className='text-xl xl:text-2xl text-gray-700'>{price}</p>
            <p className='text-lg xl:xl text-gray-700'>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default Card