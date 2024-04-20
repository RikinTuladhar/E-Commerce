import React from 'react'
import Card from '../Components/Card'

const CardContainer = () => {
  return (
    <div className='w-full pb-10   bg-[#ececec]'>
     <div className='pt-3 pl-5 w-full h-20'> <h1 className='text-2xl'>Products</h1></div>
    <div className='overflow-hidden px-5 grid py-10 grid-cols-5 gap-5 justify-items-center w-full h-auto bg-[#c9c9c9a9]'>{Array(10).fill(0).map((d,i)=>(
        <Card i={i}/>
    ))}</div>
    </div>
  )
}

export default CardContainer
