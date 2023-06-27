import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  
  return (
    <div className='navbar'>
        <div className="content">
            <div className='logo'>
            <a className="chakra-link css-14rj303" href="/">
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
            <li>
            <Link  to={"/sleep"}>Sign in</Link>
            </li>
            <li>
            <Link  to={"/sleep"}>Register</Link>
            </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar