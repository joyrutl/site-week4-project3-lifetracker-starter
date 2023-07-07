const express = require('express')
const User = require('../models/models')
const router = express.Router()

router.post("/addexercise", async (request, response, next) => {
    const {name, category, duration, intensity, UserID} = request.body
    try {
        const exercise_info = await User.Exercise(name, category, duration, intensity, UserID)
        return response.status(200).json(exercise_info)
    } catch (error) {
        next(error)
    }

})

router.get("/useexercisedata/:id", async (request, response, next) => {
    const UserID = request.params.id
    try {
        const exerciseData = await User.fetchExerciseData(UserID)
        return response.status(200).json(exerciseData.rows)
    } catch (error) {
        next(error)
    }
})

module.exports = router;