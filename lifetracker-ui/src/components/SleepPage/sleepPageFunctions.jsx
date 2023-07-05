import React from 'react'
import { useState } from 'react'
const SleepPageFunctions = () => {
  
  const updateUserFirstName = (event)=>{
    console.log(event.target.value)
    event.preventDefault()
    let UpdatedUserinput = {}
    UpdatedUserinput = {'firstname': event.target.value}
    setSignUpInfo(signUpInfo => ({
      ...signUpInfo,
      ...UpdatedUserinput
    }))

  }

  const updateUserLastName = (event )=>{
    event.preventDefault()
    let UpdatedUserinput = {}
    UpdatedUserinput = {'lastname': event.target.value}
    setSignUpInfo(signUpInfo => ({
      ...signUpInfo,
      ...UpdatedUserinput
    }))

  }

  return {
    
  }
}

export default SleepPageFunctions
