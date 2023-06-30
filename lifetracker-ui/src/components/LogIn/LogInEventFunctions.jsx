import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogInEventFunctions = ({ LoginInfo, setLoginInfo }) => {
    let history = useNavigate()
    const updateUserEmail = (event)=>{
        console.log(event.target.value)
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'email': event.target.value}
        setLoginInfo(LoginInfo => ({
            ...LoginInfo,
            ...UpdatedUserinput
        }))

        }

        const updateUserPassword = (event, signUpInfo )=>{
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'password': event.target.value}
        setLoginInfo(LoginInfo => ({
            ...LoginInfo,
            ...UpdatedUserinput
        }))

        }

        const LogInFormSubmission = (event, PostCallToLogInUser , LoginInfo ) => {
            console.log('LogInFormSubmission was called')
            event.preventDefault();
            PostCallToLogInUser(LoginInfo) 
            history("/")
            
            
            
          }

  return {
    updateUserEmail,
    updateUserPassword,
    LogInFormSubmission
}
}

export default LogInEventFunctions
