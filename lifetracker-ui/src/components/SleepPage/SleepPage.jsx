import React from 'react'
import { useState } from 'react'
import SleepPageFunctions from "./SleepPageFunctions"
import {Link} from 'react-router-dom'
import "./SleepPage.css"
const SleepPage = ({ SleepLogs, setSleepLogs }) => {
  // const = sleepPageFunctions
  const { sleepPageFunctions }  =  SleepPageFunctions()


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