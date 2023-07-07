import React from 'react'
import "./NutritionPageCard.css"

const NutritionPageCard = ({NutritionLogs}) => {
  return (
    <div className='nutri-card'>
        <div className='split-nutri'> 
    <div className='nutri-img'>
    <img src={NutritionLogs.url} alt="" />
    </div>
    <div className="content">
        <div className='split-nutri'>
            <div className='nutri-calories-div'>
                <p className='nutri-calories'>calories</p>
                <p className='nutri-data nutri-calories-data'>{NutritionLogs.calories}</p>
            </div>
            <div className='nutri-quantity-div'>
                <p className='nutri-quantity'>quantity</p>
                <p className='nutri-data nutri-quantity-data'>{NutritionLogs.quantiity}</p>
            </div>
        </div>
        <p className='food-name'>{NutritionLogs.name}</p>
        <p className='nutri-date'>{NutritionLogs.created_at}</p>
        </div>
    </div>
</div>
  )
}

export default NutritionPageCard

//"https://fruityland.co/wp-content/uploads/2021/01/Granny-smith-green-apple-FL.jpg"