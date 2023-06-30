import React from 'react'
import axios from 'axios';
import LogIn from '../../LogIn/LogIn';

const LogInUser = ({setLogin , LoginInfo , setLoginInfo }) => {
    console.log(setLogin)
    console.log(LoginInfo)
    const email = LoginInfo.email
    const password = LoginInfo.password
    const PostCallToLogInUser = async () => {
        try {
            const response = await axios.post("http://localhost:3001/auth/login", {'email':email,  'password': password});
            console.log(response.data)
            userInfoInDb = response.data
            setLoginInfo(userInfoInDb)
            setLogin(true)
        } catch (error) {
            console.error(error)
        }
    }
    
  return {
    PostCallToLogInUser
}
}

export default LogInUser
