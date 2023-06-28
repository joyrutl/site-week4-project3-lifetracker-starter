const express = require('express')
const User = require('../models/models')
const router = express.Router()

router.post('/register', async (request, response, next) => {
    const {firstname, lastname, email, username, password} = request.body
    try {
        const user = await User.Register(firstname, lastname, email, username, password)
        return response.status(200).json(user)
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (request, response, next) => {
    const {email, password} = request.body
    try{
        const user = await User.Login(email, password)
        return response.status(201).json(user)
    } catch (error) {
        next(error)
    }
})


module.exports = router;
