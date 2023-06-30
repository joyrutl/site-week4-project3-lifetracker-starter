const express = require('express')
const User = require('../models/models')
const router = express.Router()

router.post("/sleep", async (request, response) => {
    const {num_of_hours, duration, intensity, user_id} = request.body
    try {
        const nutrition_info = await User.Exercise(exercise_type, duration, intensity, user_id)
        return response.status(200).json(nutrition_info)
    } catch (error) {
        next(error)
    }

})

router.get("/", (request, response) => {

})

module.exports = router;