const express = require('express')
const User = require('../models/models')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/register', async (request, response, next) => {
    const {firstname, lastname, email, username, password} = request.body
    try {
        const user = await User.Register(firstname, lastname, email, username, password)
        const token = jwt.sign({userID: user.id, userName: user.username},
            "SECRET_KEY",{
                expiresIn: "1h"
            })
        return response.status(200).json({message: "User Registered Successfully",
                                          token: token,
                                          user: user})
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (request, response, next) => {
    const {email, password} = request.body
    try{
        const user = await User.Login(email, password)
        const token = jwt.sign({userID: user.id, userName: user.username},
            "SECRET_KEY",{
                expiresIn: "1h"
            })
            return response.status(200).json({message: "User Logged In Successfully",
                                              token: token,
                                              user: user})
    } catch (error) {
        next(error)
    }
})


module.exports = router;
