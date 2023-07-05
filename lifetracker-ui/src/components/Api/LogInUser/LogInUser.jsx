import React from 'react'
import axios from 'axios';
import LogIn from '../../LogIn/LogIn';

<<<<<<< HEAD
const LogInUser = ({LoginInfo , setLogin , setLoginInfo }) => {
=======
const LogInUser = ({setLogin , LoginInfo , setLoginInfo, setUserID }) => {
>>>>>>> a848a2f997855f57d7a667fee4850255d3930924
    console.log(setLogin)
    console.log(LoginInfo)
    console.log(setLoginInfo)
    const email = LoginInfo.email
    const password = LoginInfo.password
    const PostCallToLogInUser = async () => {
        try {
            const response = await axios.post("http://localhost:3001/auth/login", {'email':email,  'password': password});
            console.log(response.data)
<<<<<<< HEAD
            let userInfoInDb = response.data
            setLoginInfo(userInfoInDb.id)
            console.log(LoginInfo)
=======
            let userInfo = response.data
            setUserID(userInfo.id)
>>>>>>> a848a2f997855f57d7a667fee4850255d3930924
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
