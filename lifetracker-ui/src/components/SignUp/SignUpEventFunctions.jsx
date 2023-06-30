import React from 'react'

const SignUpEventFunctions = ( {setSignUpInfo, signUpInfo} ) => {
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
    
      const updateUserLastName = (event, signUpInfo )=>{
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'lastname': event.target.value}
        setSignUpInfo(signUpInfo => ({
          ...signUpInfo,
          ...UpdatedUserinput
        }))
    
      }
    
    
      const updateUserEmail = (event, signUpInfo )=>{
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'email': event.target.value}
        setSignUpInfo(signUpInfo => ({
          ...signUpInfo,
          ...UpdatedUserinput
        }))
    
      }
    
    
      const updateUsername = (event, signUpInfo )=>{
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'username': event.target.value}
        setSignUpInfo(signUpInfo => ({
          ...signUpInfo,
          ...UpdatedUserinput
        }))
    
      }
    
      const updateUserPassword = (event, signUpInfo )=>{
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'password': event.target.value}
        setSignUpInfo(signUpInfo => ({
          ...signUpInfo,
          ...UpdatedUserinput
        }))
    
      }

      const updateUserComfirmPassword = (event, signUpInfo) => {
        event.preventDefault()
        let UpdatedUserinput = {}
        UpdatedUserinput = {'confirmPassword': event.target.value}
        setSignUpInfo(signUpInfo => ({
            ...signUpInfo,
            ...UpdatedUserinput
        }))
      }
 
      const signUpFormSubmission = (event, PostSignUpInfo, signUpInfo ) => {
        event.preventDefault();
        PostSignUpInfo(signUpInfo) 
        
        
        
      }
  return {
    updateUserFirstName,
    updateUserLastName,
    updateUserEmail,
    updateUsername,
    updateUserPassword,
    updateUserComfirmPassword,
    signUpFormSubmission
}
}

export default SignUpEventFunctions
