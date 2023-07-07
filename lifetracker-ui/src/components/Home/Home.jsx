import React from 'react'
import {Link} from 'react-router-dom'
import "./Home.css"

const Home = ( {Login} ) => {
  return (
    <div className='Home'>
      <div className='hero-img'>
        <div className='hero-title'>
          <h1>LifeTracker</h1>
          <p>Helping you take back control of your world.</p>
          { (!Login)?
            <span> 
           <Link  to={"/signUp"}> <button> Sign Up </button> </Link> 
           <Link  to={"/login"}> <button> Log in </button></Link> 
          </span>: null
}
        </div>
      </div>
        <div className='tiles'>
          <div className='card'>
            <img className="fitness" src="https://lifetracker.up.railway.app/assets/athlete-adf95577.jpg" alt="" />
            <div className='text'>
            <p>Fitness</p>
            </div>
          </div>
          <div className='card'>
            <img className="food" src="	https://lifetracker.up.railway.app/assets/food-e5a7cc9e.jpg" alt="" />
            <div className='text'>
            <p>Food</p>
            </div>
          </div>
          <div className='card'>
            <img className="rest" src="	https://lifetracker.up.railway.app/assets/alarm-cff3823f.jpg" alt="" />
            <div className='text'>
            <p>Rest</p>
            </div>
          </div>
          <div className='card'>
            <img className="planner" src="https://lifetracker.up.railway.app/assets/calendar-debf6f3b.jpg" alt="" />
            <div className='text'>
            <p>Planner</p>
            </div>
          </div>
        </div>
      

    </div>
  )
}

export default Home