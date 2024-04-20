import React from 'react'
import Slider from '../Components/Slider'
import CategoriesContainer from './CategoriesContainer'
import CardContainer from './CardContainer'

const Home = () => {
  return (
    <div>
    <div className='relative w-full h-auto'>  <Slider/></div>
      <CategoriesContainer/>
      <CardContainer/>
    </div>
  )
}

export default Home
