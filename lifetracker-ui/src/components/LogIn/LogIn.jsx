import React from 'react'
import "./LogIn.css"
import {Link} from 'react-router-dom'
import LogInUser from '../Api/LogInUser/LogInUser'
const LogIn = (props) => {
  // LogInCondition = props.Login
  return (
   <div className='image-bg'>

  <div className='login-div'>
      <h1>Welcome Back!</h1>
      <p>Insert your login details below</p>
      <form className='login-form'>
      {/* <label> Email </label> */}
      <input type="email" name="email" id="email" placeholder='Email'/>
      {/* <label> Password </label> */}
      <input type="password" name="password" id="password" placeholder='Password'/>
      
      <button type="submit">LOG IN</button>
      
      </form>
      <p className='prompt'>New to us?      
      <Link  to={"/signUp"}> Create an Account </Link>
      </p>
  </div>
    
    </div>
  )
}

export default LogIn
