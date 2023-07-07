import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import LogIn from '../LogIn/LogIn'

const Navbar = ({setNutrional, setSleepLogs, setExcerciseLogs, Login, handleSignOutUser} ) => {
 
  return (
    <div className='navbar'>
        <div className="content">
            <div className='logo'>
            <a href="/">
              <img src="https://lifetracker.up.railway.app/assets/codepath-f1b3e41a.svg" alt="logo"/>
            </a>
            </div>
            <ul className='links'>
            <li>
            <Link  to={"/activity"}>Activity</Link>
            </li>
            <li>
            <Link  to={"/exercise"}>Exercise</Link>
            </li>
            <li>
            <Link  to={"/nutrition"}>Nutrition</Link>
            </li>
            <li>
            <Link  to={"/sleep"}>Sleep</Link>
            </li>
            {(!Login)?
            <li>
            <Link  to={"/login"}>Log in</Link>
            </li>: 
            <button onClick = { () => handleSignOutUser() }>
              Signout
              </button>
}
            {(!Login)?
            <li>
            <Link  to={"/signUp"}>Register</Link>
            </li>:
            null
}
            </ul>

        </div>

    </div>
  )
}

export default Navbar