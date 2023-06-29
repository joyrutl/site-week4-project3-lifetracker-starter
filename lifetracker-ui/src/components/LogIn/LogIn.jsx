import React from 'react'
import LogInUser from '../Api/LogInUser/LogInUser'
const LogIn = (props) => {
  // LogInCondition = props.Login
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
