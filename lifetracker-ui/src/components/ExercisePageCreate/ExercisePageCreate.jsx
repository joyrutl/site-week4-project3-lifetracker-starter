import React from 'react'
import "./ExercisePageCreate.css"
import { useState } from 'react'
import ExercisePageCreateEventFunctions from './ExercisePageCreateEventFunctions'
import UserExcercises from '../Api/UserExcercises/UserExcercises'
const ExercisePageCreate = ({ PostUserExcercises }) => {

  
  const [ExcerciseLog , setExcerciseLog ]= useState({'name': null , 'category': null , 'duration': null, 'intensity': null})
  const { updateExcerciseName,
    updateExcerciseCategory,
    updateExcerciseDuration,
    updateExcerciseIntensity,
    updateExcerciseURL,
    ExcerciseFormSubmission } = ExercisePageCreateEventFunctions({ setExcerciseLog })
  return (
    <div>
    <div className='header-wrap-ex'>
      <h1 className='header'>Exercise</h1>
    </div>
    <div className='cat-form-ex'>
      <h2>Record Exercise</h2>
       <form action="" className='add-exercise'onSubmit={ (event) => ExcerciseFormSubmission(event,PostUserExcercises, ExcerciseLog)}>
          <input type="text" placeholder="Name of Exercise" onChange={ (event) =>  updateExcerciseName(event) } required/>
          <select onChange={  (event) => updateExcerciseCategory(event)}  required defaultValue="cat-select">
              <option value="cat-select" disabled>Select a Category</option>
              <option value="run">Run</option>
              <option value="bike">Bike</option>
              <option value="swim">Swim</option>
              <option value="sports">Sports</option>
          </select>

          <span className='inline'>
          <label>Duration (min) </label>
          <input type="number" min="1" max="60"  onChange={ (event) => updateExcerciseDuration(event)} required></input>
          <label>Intensity </label> 
          <input type="number" min="1" max="10" onChange = { (event) => updateExcerciseIntensity(event)} required></input>
          </span>
          <button type="submit">Save</button>

        </form>
      </div>

    </div>
  )
}

export default ExercisePageCreate