import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect} from 'react'
import { useState } from 'react'
import "./NutritionPage.css"


const NutritionPage = ({GetUserNutritionLogs, Login} ) => {
  const [NutritionLogs, setNutritionLogs] = useState([])
  if (Login){
    useEffect( () => { GetUserNutritionLogs( setNutritionLogs ) }, [])
  }
  console.log( NutritionLogs)
  return (
    <div>
    <div className='header-wrap-nutri'>
      <h1 className='header'>Nutrition</h1>
    </div>
      <Link  to={"/nutrition/create"}><button>Add Nutrition</button> </Link>
    </div>
  )
}

export default NutritionPage