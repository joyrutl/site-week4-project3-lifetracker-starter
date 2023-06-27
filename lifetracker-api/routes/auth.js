const express = require('express')
const User = require("../models/models")
const router = express.Router()

router.post('/register', async (request, response, next) => {
    const {firstname, lastname, email, username, password} = request.body
    try {
        const user = await User.register(firstname, lastname, email, username, password)
        return response.status(200).json(user)
    } catch (error) {
        next(error)
    }
})

router.post('/login', (request, response) => {

})


module.exports = router;
