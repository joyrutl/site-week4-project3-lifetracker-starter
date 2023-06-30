import React from 'react'
import { useState } from 'react'
import "./SignUp.css"
import {Link} from 'react-router-dom'
import SignUpUser from '../Api/SignUpUser/SignUpUser'
const SignUp = (props) => {
  const [signUpInfo, setSignUpInfo]  = useState({'firstname': null , 'lastname': null , 'username': null, 'email': null, 'password':null })
  
  // const handleSignUp = ((e)=>{
  //   e.preventDefault()
  //   signUpInfo
  // })

  return (
    <div className='container'>

    <div className='content-left'>
        {/* <img src="https://media.istockphoto.com/id/1140193165/photo/slim-and-fit-woman-drinking-water-before-having-breakfast.jpg?s=612x612&w=0&k=20&c=_QgpYIvS6mFI18tGVJGGD5mKbJ9KHk5JBqAfHDIopKg=" alt="" /> */}
    </div>

    <div className='content-right'>

    <div className='form-div'>
      <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur.png" alt="" />
      <h1>Create Account</h1>

      <form className='signup-form'>
      
      <span className='inline'>
      {/* <label> First Name: </label>  */}
      <input type="text" placeholder='First Name'/>

      {/* <label> Last Name: </label> */}
      <input type="text" placeholder='Last Name'/>
      
      </span>
      
      <br/>
      
      {/* <label> Email: </label> <br/> */}
      <input type="email" placeholder='Email'/>
    
      <br />
      
      {/* <label> Username: </label> <br/> */}
      <input type="text" placeholder='Username'/>

      <br/>

      {/* <label> Password: </label> <br/> */}
      <input type="password" placeholder='Password'/>

      <br/>

      {/* <label> Confirm Password: </label> <br/> */}
      <input type="password" placeholder='Confirm Password'/>

      <br/>

      <button type="submit">Create Account</button>
      </form>
      <p className='prompt'>Already have an account?    
      <Link to={"/login"}>Log In</Link>
      </p>
    </div>
    </div>
  </div>
  )
}

export default SignUp
