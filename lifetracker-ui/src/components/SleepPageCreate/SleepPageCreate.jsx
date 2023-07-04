import React from 'react'
import "./SleepPageCreate.css"

const SleepPageCreate = () => {
  return (
    <div>
    <div className='header-wrap-sleep'>
      <h1 className='header'>Sleep</h1>
    </div>
    <div className='cat-form-sleep'> 
    <h2>Record Sleep</h2>
    <form action="" className='add-sleep'>
      <label> Start Time </label> <br />
      <input type="datetime-local" id="meeting-time"></input>
      <br />
      <label> End Time </label> <br />
      <input type="datetime-local" id="meeting-time"></input>
      <br />
      <button type="submit">Save</button>
     </form>
     </div>
    </div>

  )
}

export default SleepPageCreate