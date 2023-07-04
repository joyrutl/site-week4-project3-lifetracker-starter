import React from 'react'
import {Link} from 'react-router-dom'
import "./SleepPage.css"

const SleepPage = () => {
  return (
    <div>
    <div className='header-wrap-sleep'>
      <h1 className='header'>Sleep</h1>
    </div>
      <Link  to={"/sleep/create"}><button>Add Sleep</button> </Link>
    </div>
  )
}

export default SleepPage