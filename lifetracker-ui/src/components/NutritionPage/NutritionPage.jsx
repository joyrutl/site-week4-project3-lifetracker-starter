import React from 'react'
import {Link} from 'react-router-dom'
import "./NutritionPage.css"
import NutritionPageCard from '../NutritionPageCard/NutritionPageCard'


const NutritionPage = () => {
  return (
    <div>
    <div className='header-wrap-nutri'>
      <h1 className='header'>Nutrition</h1>
    </div>
    <div className='body-nutri'>
      <Link  to={"/nutrition/create"}><button className='add-nutri'>+</button> </Link>
      <br />
      
      <NutritionPageCard/>
      <NutritionPageCard/>
    
    </div>
    
    </div>
  )
}

export default NutritionPage