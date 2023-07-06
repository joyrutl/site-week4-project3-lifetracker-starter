import React from 'react'
import "./ExercisePage.css"
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

const ExercisePage = ( {ExerciseLogs, setExcerciseLogs, Login, GetUserExcercises } ) => {
  console.log('Login condition', Login)
  if (Login){
    useEffect( () => { GetUserExcercises( setExcerciseLogs) }, [])
    }
  console.log('ExcerciseLogs is:', ExerciseLogs)
  return (
  
  <div className='header-wrap-ex'>
      <h1 className='header'>Exercise</h1>
  <Link  to={"/exercise/create"}><button>Add Exercise</button> </Link>

  </div>

)
}

export default ExercisePage