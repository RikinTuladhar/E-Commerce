import React from 'react'
import Card  from "../Components/Card"
const ProductPage = () => {
  return (
    <div className='w-full flex flex-col  py-10 bg-[#ececec]'>
      <div className='w-full h-[30vh]'><img className='w-full h-full' src="/Images/slide1.jpg" alt="starting image" onError={e =>e.target.src ="/Images/slide1.jpg"} /></div>
      <div className='w-full h-auto bg-[#c9c9c9a9]'>
            <div className='flex justify-around w-full py-3 header' ><h1 className='text-3xl'>Products </h1>
            <select name="categories" id="">
                <option value="">Select Catagories</option>
                <option value="">More</option>
            </select></div>
            <div className='body py-5 justify-items-center gap-5 grid grid-cols-5 w-full h-auto bg-[#c9c9c9a9]'>
            {Array(10).fill(0).map((d,i)=>(
               <Card key={i}/>
            ))}
            </div>
      </div>
    </div>
  )
}

export default ProductPage