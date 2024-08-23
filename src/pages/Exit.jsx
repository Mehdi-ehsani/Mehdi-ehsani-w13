import React from 'react'

const Exit = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-[400px] h-[150px] flex  flex-col items-center justify-center border-2 border-gray-200 rounded-xl'>
      <p className='text-2xl mb-6'>برای خروج از حساب تایید کنید</p>
      <p className=' cursor-pointer text-2xl w-5/6 text-center h-14 leading-[56px] text-white bg-red-600 rounded-lg shadow-sm'>تایید</p>
    </div>
    </div>
  )
}

export default Exit