import React from 'react'
import { useState } from 'react'

const UserSleep = () => {
    const [SleepLogs, setSleepLogs] = useState()
    const GetSleepingData = async () => {
        try {
            const response = await axios.post("http://localhost:3001/sleep");
            console.log(response.data)
            setExcerciseLogs(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    const PostSleepingData = async () => {
        try {
            const response = await axios.post("http://localhost:3001/sleep/sleepingData");
            console.log(response.data)
            SetLogInUserInfo(true)
        } catch (error) {
            console.error(error)
        }
    }

  return {
    PostSleepingData,
    GetSleepingData,
    setSleepLogs,
    SleepLogs
    
}
}

export default UserSleep
