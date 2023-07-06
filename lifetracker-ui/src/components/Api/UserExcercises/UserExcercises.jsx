import React from 'react'
import { useState } from 'react';
import axios from "axios"
const UserExcercises = (userID) => {
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
    
    const PostUserExcercises = async () => {
        try {
            const response = await axios.post("http://localhost:3001/exercise/addexcercise");
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
