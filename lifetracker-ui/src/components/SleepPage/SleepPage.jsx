import React from 'react'
import { useState } from 'react'
import SleepPageFunctions from "./SleepPageFunctions"
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import "./SleepPage.css"
const SleepPage = ({ SleepLogs, setSleepLogs, Login, GetSleepingData }) => {
  // const = sleepPageFunctions
  console.log(Login)
  const { sleepPageFunctions }  =  SleepPageFunctions()
  
  if (Login){
    useEffect( () => { GetSleepingData( setSleepLogs) }, [])
    }
  console.log('SleepLogs is:', SleepLogs)

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