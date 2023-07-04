import React from 'react'
import "./NutritionPageCreate.css"

const NutritionPageCreate = () => {
  return (
    <div>
    <div className='header-wrap'>
      <h1 className='header'>Nutrition</h1>
    </div>
    <div className='cat-form'>
    <h2>Record Nutriton</h2>
    <form action="" className='add-nutrition'>
       <input type="text" placeholder="Name" />
       <br/>
       
       <select>
           <option value="cat-select">Select a Category</option>
           <option value="run">Snack</option>
           <option value="bike">Beverage</option>
           <option value="swim">Food</option>
       </select>
       <br/>
       
       <span className='inline'>
       <label>Quantity: </label>
       <input type="number" min="1"></input>
       
       <label>Calories: </label>
       <input type="number" min="0" step="10"></input>
       </span>


       <br/>
       <input type="url" class="form-control" placeholder="Insert image URL"   id="image-url"></input>
       <br />
       <button type="submit">Save</button>

     </form>
     </div>
     </div>
  )
}

export default NutritionPageCreate