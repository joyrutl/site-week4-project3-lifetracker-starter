import React from 'react'
import "./ExercisePage.css"
import {Link} from 'react-router-dom'
import ExercisePageCard from '../ExercisePageCard/ExercisePageCard'

const ExercisePage = () => {
  return (
  <div>
  
  <div className='header-wrap-ex'>
      <h1 className='header'>Exercise</h1>
  </div>
 
  <div className='body-ex'>
  <Link  to={"/exercise/create"}><button className='add-ex'>+</button> </Link>
  <br />

  <ExercisePageCard/>


  </div>
  </div>

  )
}

export default ExercisePage