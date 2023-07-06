import React from 'react'
import { useState } from 'react';
import axios from "axios"
const UserExcercises = ({UserID}) => {
    const [ExerciseLogs, setExcerciseLogs] = useState([])
    const GetUserExcercises = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/exercise/useexercisedata/${userID}`);
            console.log(response.data)
            setExcerciseLogs(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    
    const PostUserExcercises = async (ExcerciseLog) => {
        try {
            console.log('ExcerciseLog' ,ExcerciseLog, 'UserID' , UserID)
            const response = await axios.post("http://localhost:3001/exercise/addexcercise", { 'name' :ExcerciseLog.name, 'calories': ExcerciseLog.calories, 'category': ExcerciseLog.category, 'quantity': ExcerciseLog.quantity, 'url': ExcerciseLog.url , 'UserID': UserID });
            console.log(response.data)
            // SetLogInUserInfo(true)
        } catch (error) {
            console.error(error)
        }
    }
   
  return {
    GetUserExcercises,
    PostUserExcercises,
    setExcerciseLogs,
    ExerciseLogs

}
}

export default UserExcercises
