import React from 'react'
import LogInUser from '../Api/LogInUser/LogInUser'
import { useState, useEffect } from "react";
const LogIn = ({Login, PostCallToLogInUser  }) => {
  // LogInCondition = props.Login
  const [LoginInfo, setLoginInfo] = useState({ 'email': null, 'password': null })

  return (
    <div className='login-div'>
      <p>login</p>
      <form className='login-form'>
      <label> Email </label>
      <input type="email" name="email" id="email" />
      <label> Password </label>
      <input type="password" name="password" id="password" />
      </form>
    </div>
  )
}

export default LogIn
