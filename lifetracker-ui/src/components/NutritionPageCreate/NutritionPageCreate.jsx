
import React from 'react'
import { useState } from 'react'
import NutritionPageCreateEventFunctions from './NutritionPageCreateEventFunctions'
import "./NutritionPageCreate.css"

const NutritionPageCreate = ({ PostUserNutritionLogs  }) => {
  const [NutritionLog , setNutritionLog ]= useState({'name': null , 'category': null , 'quantity': null, 'calories': null, 'url':null })
  const { updateNutritionName, updateUserQuantity, updateNutritionCategory, updateUserCalories, nutritionFormSubmission, updateUserURL  }  = NutritionPageCreateEventFunctions( { setNutritionLog })
  
  console.log(NutritionLog)
  return (
    <div>
    <div className='header-wrap'>
      <h1 className='header'>Nutrition</h1>
    </div>
    <div className='cat-form'>
    <h2>Record Nutriton</h2>
    <form action="" className='add-nutrition' onSubmit={ (event) =>  nutritionFormSubmission( event, PostUserNutritionLogs, NutritionLog ) } >
       <input type="text" placeholder="Name" onChange = { (event) => updateNutritionName(event) } required/>
       <br/>
       
       <select onChange={(event) => updateNutritionCategory(event)} required defaultValue="cat-select"> 
           <option value="cat-select" disabled>Select a Category</option>
           <option value="Snack">Snack</option>
           <option value="Beverage">Beverage</option>
           <option value="Food">Food</option>
       </select>
       <br/>
       
       <span className='inline'>
       <label>Quantity: </label>
       <input type="number" min="1" onChange={ (event) => updateUserQuantity(event)} required></input>
       
       <label>Calories: </label>
       <input type="number" min="0" step="10" onChange={ (event) =>  updateUserCalories(event)} required></input>
       </span>


       <br/>
       <input type="url" className="form-control" placeholder="Insert image URL"   id="image-url" onChange={ (event) => updateUserURL(event)} required></input>
       <br />
       <button type="submit"  >Save</button>

     </form>
     </div>
     </div>
  )
}

export default NutritionPageCreate