import React from 'react'
import "./ExercisePageCard.css"

const ExercisePageCard = ({ExerciseLogs}) => {

const dateString = ExerciseLogs.created_at

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric", hour: 'numeric', hour12: true}
  return new Date(dateString).toLocaleDateString(undefined, options)
}

console.log(formatDate(dateString))
  
  return (
  <div className='ex-card'>
    <div className='split'>
      <div className='ex-duration-div'>
        <p className='ex-duration'>duration (min)</p>
        <p className='ex-data ex-duration-data'>{ExerciseLogs.duration}</p>
      </div>
      <div className='ex-intensity-div'>
        <p className='ex-intensity'>intensity</p>
        <p className='ex-data ex-intensity-data'>{ExerciseLogs.intensity}</p>
      </div>
    </div>
      <p className='ex-activity'>{ExerciseLogs.name}</p>
      <p className='ex-date'>{formatDate(dateString)}</p>
</div>

  )
}

export default ExercisePageCard