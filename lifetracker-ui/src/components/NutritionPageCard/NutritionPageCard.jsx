import React from 'react'
import "./NutritionPageCard.css"

const NutritionPageCard = () => {
  return (
    <div className='nutri-card'>
        <div className='split-nutri'> 
    <div className='nutri-img'>
    <img src="https://fruityland.co/wp-content/uploads/2021/01/Granny-smith-green-apple-FL.jpg" alt="" />
    </div>
    <div className="content">
        <div className='split-nutri'>
            <div className='nutri-calories-div'>
                <p className='nutri-calories'>calories</p>
                <p className='nutri-data nutri-calories-data'>30</p>
            </div>
            <div className='nutri-quantity-div'>
                <p className='nutri-quantity'>quantity</p>
                <p className='nutri-data nutri-quantity-data'>10</p>
            </div>
        </div>
        <p className='food-name'>food name</p>
        <p className='nutri-date'>date created</p>
        </div>
    </div>
</div>
  )
}

export default NutritionPageCard