const express = require('express')
const User = require('../models/models')
const router = express.Router()

router.post("/exercise", async (request, response) => {
    const {exercise_type, duration, intensity, user_id} = request.body
    try {
        const exercise_info = await User.Exercise(exercise_type, duration, intensity, user_id)
        return response.status(200).json(exercise_info)
    } catch (error) {
        next(error)
    }

})

router.get("/useexercisedata", async (request, response, next) => {
    const {UserID} = request.body
    try {
        const exerciseData = await User.fetchExerciseData(UserID)
        return response.status(200).json(exerciseData)
    } catch (error) {
        next(error)
    }
})

module.exports = router;