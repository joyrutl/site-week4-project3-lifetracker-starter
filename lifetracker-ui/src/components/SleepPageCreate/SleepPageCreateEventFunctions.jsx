import React from 'react'
import { useNavigate } from 'react-router-dom'
const SleepPageCreateEventFunctions = ({ setSleepLog }) => {
    let history = useNavigate()
    const updateSleepStartTime = (event)=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'starttime': event.target.value.replace('T', ' ')}
        setSleepLog(SleepLog => ({
          ...SleepLog,
          ...UpdatedUserinput
        }))
    
      }
    
      const updateSleepEndTime = (event )=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'endtime': event.target.value.replace('T', ' ')}
        setSleepLog(SleepLog => ({
          ...SleepLog,
          ...UpdatedUserinput
        }))
    
      }
    

    
      const SleepFormSubmission = (event, PostUserExcercises , SleepLog) => {
        event.preventDefault();
        console.log( SleepLog)
        console.log(SleepLog)
        PostUserExcercises(SleepLog) 
        history('/sleep')
        
      }
  return {
    updateSleepStartTime,
    updateSleepEndTime,
    SleepFormSubmission
}
}

export default SleepPageCreateEventFunctions
