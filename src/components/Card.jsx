import React from 'react'

const Card = ({price , title , img , date}) => {
  return (
    <div className='border-2 bg-gray-100 border-gray-200 flex rounded-xl overflow-hidden shadow-sm'>
        <img className='w-56 h-56' src={img} />
        <div className='w-full m-4 flex flex-col justify-between' dir='rtl'>
            <h3 className='text-3xl'>{title}</h3>
            <div>
            <p className='text-2xl text-gray-700'>{price}</p>
            <p className='text-xl text-gray-700'>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default Card