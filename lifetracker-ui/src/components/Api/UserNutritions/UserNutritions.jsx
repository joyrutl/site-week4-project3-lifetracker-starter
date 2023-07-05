import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const UserNutritions = ({UserID}) => {
    const [NutritionLogs, setNutritionLogs] = useState()
    const GetUserNutritionLogs = async () => {
        try {
            const response = await axios.get("http://localhost:3001/login/nutritionData", { 'UserID': UserID });
            console.log(response.data)

            setNutritionLogs(response.data)
            
        } catch (error) {
            console.error(error)
        }
    }
    const PostUserNutritionLogs = async (NutritionLog) => {
      console.log(NutritionLog, UserID)
      try {
        const response = await axios.post("http://localhost:3001/nutritions/addNutrionData", { 'name' :NutritionLog.name, 'calories': NutritionLog.calories, 'category': NutritionLog.category, 'quantity': NutritionLog.quantity, 'url': NutritionLog.url , 'UserID': UserID });
        console.log(response.data)
        // SetLogInUserInfo(true)
    } catch (error) {
        console.error(error)
    }
    }
    

  return {
  PostUserNutritionLogs,
  GetUserNutritionLogs,
  NutritionLogs,
  setNutritionLogs
}
}

export default UserNutritions
