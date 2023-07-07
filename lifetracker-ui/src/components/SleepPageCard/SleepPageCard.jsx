import React from 'react'
import "./SleepPageCard.css"

const SleepPageCard = ({SleepLogs}) => {
    // start_time
    //end_time

const startTime = SleepLogs.start_time
const endTime = SleepLogs.end_time
const dateString = SleepLogs.start_time

const formatTime = (startTime) => {
  const options = {hour: 'numeric', minute: 'numeric', hour12: true}
  return new Date(startTime).toLocaleTimeString(undefined, options)
}

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric"}
  return new Date(dateString).toLocaleDateString(undefined, options)
}

  return (
    <div className='sleep-card'>
    <p className='sleep-date'>{formatDate(dateString)}</p>
    <div className='split'>
      <div className='sleep-duration-div'>
        <p className='sleep-duration'>Start Time</p>
        <p className='sleep-data sleep-duration-data'>{formatTime(startTime)}</p>
      </div>
      <div className='sleep-intensity-div'>
        <p className='sleep-intensity'>End Time</p>
        <p className='sleep-data ex-intensity-data'>{formatTime(endTime)}</p>
      </div>
    </div>
</div>
  )
}

export default SleepPageCard