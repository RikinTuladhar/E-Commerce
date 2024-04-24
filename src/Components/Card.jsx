import React from 'react'

const Card = ({product}) => {
  return (
    <>  
    {product?.map((product)=>(
   <div key={product.id} className='rounded-md w-44 h-56 flex flex-col gap-4  bg-[#F6F5F2]' >
   <div className='w-full h-[50%]'><img src="" alt="img" style={{width:"100%", height:"100%" , borderEndEndRadius:"10px"}} onError={e => e.target.src ="Images/ImageNotFound.jpg"} /></div>
   <div className='w-full pl-5 '><h1>{product.name}</h1></div>
   <div className='w-full pl-5 '><button className='px-2 text-white bg-black border rounded-lg'>Read more</button></div>
   </div>
    ))
      
   
    }
    </>
  )
}

export default Card
