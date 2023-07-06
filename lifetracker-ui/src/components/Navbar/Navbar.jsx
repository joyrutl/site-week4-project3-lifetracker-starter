import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

const Navbar = ({setNutrional, setSleepLogs, setExcerciseLogs } ) => {
  
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
           
            <div className='login-state'>
            <button>
            <Link  to={"/login"}>Log in</Link>
            </button>
          
            <button>
            <Link  to={"/signUp"}>Register</Link>
            </button>
            </div>
            
            </ul>
            
            
        </div>

    </div>
  )
}

export default Navbar