import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const UserNutritions = () => {
    const [NutritionLogs, setNutritionLogs] = useState()
    const GetUserNutritionLogs = async () => {
        try {
            const response = await axios.get("http://localhost:3001/login/nutritionData");
            console.log(response.data)
            setNutritionFacts(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    const PostUserNutritionLogs = async () => {
      try {
        const response = await axios.post("http://localhost:3001/nutritions/addNutrionData");
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
