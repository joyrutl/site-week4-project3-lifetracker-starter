import React from 'react'
import { useNavigate } from 'react-router-dom'
const ExercisePageCreateEventFunctions = ( {setExcerciseLog} ) => {
    let history = useNavigate()
    const updateExcerciseName = (event)=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'name': event.target.value}
        setExcerciseLog(ExcerciseLog => ({
          ...ExcerciseLog,
          ...UpdatedUserinput
        }))
    
      }
    
      const updateExcerciseCategory = (event )=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'category': event.target.value}
        setExcerciseLog(ExcerciseLog => ({
          ...ExcerciseLog,
          ...UpdatedUserinput
        }))
    
      }
    
    
      const updateExcerciseDuration= (event)=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'duration': event.target.value}
        setExcerciseLog(ExcerciseLog => ({
          ...ExcerciseLog,
          ...UpdatedUserinput
        }))
    
      }
    
    
      const updateExcerciseIntensity   = (event )=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'intensity': event.target.value}
        setExcerciseLog(ExcerciseLog => ({
          ...ExcerciseLog,
          ...UpdatedUserinput
        }))
    
      }
    
      const updateExcerciseURL= (event )=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'url': event.target.value}
        setExcerciseLog(ExcerciseLog => ({
          ...ExcerciseLog,
          ...UpdatedUserinput
        }))
    
      }

      const ExcerciseFormSubmission = (event, PostUserExcercises , ExcerciseLog) => {
        event.preventDefault();
        PostUserExcercises(ExcerciseLog) 
        history('/exercise')
        
      }
  return {
    updateExcerciseName,
    updateExcerciseCategory,
    updateExcerciseDuration,
    updateExcerciseIntensity,
    updateExcerciseURL,
    ExcerciseFormSubmission
}
}

export default ExercisePageCreateEventFunctions
