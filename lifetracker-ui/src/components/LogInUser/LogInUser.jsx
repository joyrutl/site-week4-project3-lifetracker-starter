import React from 'react'

const LogInUser = (SetLogInUserInfo) => {
    const GetCallToLogInUser = async () => {
        try {
            const response = await axios.post("http://localhost:3001/login");
            console.log(response.data)
            SetLogInUserInfo(true)
        } catch (error) {
            console.error(error)
        }
    }
    GetCallToLogInUser()
  return (
    <div>
    </div>
  )
}

export default LogInUser
