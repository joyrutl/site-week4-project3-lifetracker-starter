import React from 'react'
import axios from 'axios';

const LogInUser = (SetLogInUserInfo, loginInfo) => {
    const PostCallToLogInUser = async () => {
        try {
            const response = await axios.post("http://localhost:3001/auth/login", {'email':email,  'password': password});
            console.log(response.data)
            SetLogInUserInfo(true)
        } catch (error) {
            console.error(error)
        }
    }
    
  return {
    PostCallToLogInUser
}
}

export default LogInUser
