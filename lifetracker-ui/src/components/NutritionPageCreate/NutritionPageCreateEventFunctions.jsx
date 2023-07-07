import React from 'react'
import { useNavigate } from 'react-router-dom'
const NutritionPageCreateEventFunctions = ({ setNutritionLog  }) => {
    let history = useNavigate()
    const updateNutritionName = (event)=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'name': event.target.value}
        setNutritionLog(NutritionLog => ({
          ...NutritionLog,
          ...UpdatedUserinput
        }))
    
      }
    
      const updateNutritionCategory = (event )=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'category': event.target.value}
        setNutritionLog(NutritionLog => ({
          ...NutritionLog,
          ...UpdatedUserinput
        }))
    
      }
    
    
      const updateUserQuantity = (event)=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'quantity': event.target.value}
        setNutritionLog(NutritionLog => ({
          ...NutritionLog,
          ...UpdatedUserinput
        }))
    
      }
    
    
      const updateUserCalories   = (event )=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'calories': event.target.value}
        setNutritionLog(NutritionLog => ({
          ...NutritionLog,
          ...UpdatedUserinput
        }))
    
      }
    
      const updateUserURL= (event )=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'url': event.target.value}
        setNutritionLog(NutritionLog => ({
          ...NutritionLog   ,
          ...UpdatedUserinput
        }))
    
      }

      const nutritionFormSubmission = (event, PostUserExcercises, ExcerciseLog) => {
        event.preventDefault();
        PostUserExcercises(ExcerciseLog) 
        history('/nutrition')
        
      }
  return {
    updateNutritionName,
    updateNutritionCategory,
    updateUserQuantity,
    updateUserCalories,
    updateUserURL,
    nutritionFormSubmission

}
}

export default NutritionPageCreateEventFunctions