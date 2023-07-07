import React, { useState } from 'react'
import "./SleepPageCreate.css"
import SleepPageCreateEventFunctions from './SleepPageCreateEventFunctions'
const SleepPageCreate = ( {PostSleepingData} ) => {
  const [SleepLog, setSleepLog ] = useState({ 'starttime': null , 'endtime': null  })
  const {updateSleepStartTime, updateSleepEndTime, SleepFormSubmission} = SleepPageCreateEventFunctions( { setSleepLog })
  return (
    <div>
    <div className='header-wrap-sleep'>
      <h1 className='header'>Sleep</h1>
    </div>
    <div className='cat-form-sleep'> 
    <h2>Record Sleep</h2>
    <form action="" className='add-sleep' onSubmit={ (event) => SleepFormSubmission(event, PostSleepingData, SleepLog) }>
      <label> Start Time </label> <br />
      <input type="datetime-local" id="meeting-time" onChange={ (event) => updateSleepStartTime(event)}></input>
      <br />
      <label> End Time </label> <br />
      <input type="datetime-local" id="meeting-time" onChange={ (event) => updateSleepEndTime(event)}></input>
      <br />
      <button type="submit">Save</button>
     </form>
     </div>
    </div>

  )
}

export default SleepPageCreate