import React from 'react'
import "./ExercisePageCreate.css"


const ExercisePageCreate = () => {
  return (
    <div>
    <div className='header-wrap-ex'>
      <h1 className='header'>Exercise</h1>
    </div>
    <div className='cat-form-ex'>
      <h2>Record Exercise</h2>
       <form action="" className='add-exercise'>
          <input type="text" placeholder="Name of Exercise" />
          <select>
              <option value="cat-select">Select a Category</option>
              <option value="run">Run</option>
              <option value="bike">Bike</option>
              <option value="swim">Swim</option>
              <option value="sports">Sports</option>
          </select>

          <span className='inline'>
          <label>Duration (min) </label>
          <input type="number" min="1" max="60"></input>
          <label>Intensity </label>
          <input type="number" min="1" max="10"></input>
          </span>
          <button type="submit">Save</button>

        </form>
      </div>

    </div>
  )
}

export default ExercisePageCreate