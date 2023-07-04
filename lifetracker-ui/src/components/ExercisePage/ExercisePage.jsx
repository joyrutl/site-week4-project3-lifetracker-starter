import React from 'react'
import "./ExercisePage.css"
import {Link} from 'react-router-dom'

const ExercisePage = () => {
  return (
  <div>
  
  <div className='header-wrap-ex'>
      <h1 className='header'>Exercise</h1>
    </div>
  <Link  to={"/exercise/create"}><button>Add Exercise</button> </Link>

  </div>

  )
}

export default ExercisePage