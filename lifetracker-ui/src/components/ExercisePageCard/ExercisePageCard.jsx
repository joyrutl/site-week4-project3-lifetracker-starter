import React from 'react'
import "./ExercisePageCard.css"

const ExercisePageCard = () => {
  return (
  <div className='ex-card'>
    <div className='split'>
      <div className='ex-duration-div'>
        <p className='ex-duration'>duration (min)</p>
        <p className='ex-data ex-duration-data'>30</p>
      </div>
      <div className='ex-intensity-div'>
        <p className='ex-intensity'>intensity</p>
        <p className='ex-data ex-intensity-data'>10</p>
      </div>
    </div>
      <p className='ex-activity'>activity name</p>
      <p className='ex-date'>date created</p>
</div>

  )
}

export default ExercisePageCard