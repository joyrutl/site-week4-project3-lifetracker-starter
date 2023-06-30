import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SignUpUser = (SignUpInfo) => {
    
    const firstname = SignUpInfo.firstname
    const lastname = SignUpInfo.lastname
    const username = SignUpInfo.username
    const email = SignUpInfo.email
    const password = SignUpInfo.password
    const PostSignUpInfo = async (SignUpInfo) => {
<<<<<<< HEAD
        console.log('PostSignUpInfo was called', firstname, lastname, username, email, password)
=======
        console.log('PostSignUpInfo was called', SignUpInfo)
>>>>>>> 91224f540af61c23d6d769806f8646aa4e9501c0
        try {
            const response = await axios.post("http://localhost:3001/auth/register", { 'firstname': firstname, 'lastname': lastname ,'email':email, 'username': username, 'password': password})
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
 

  return {
    PostSignUpInfo
  }
}

export default SignUpUser
