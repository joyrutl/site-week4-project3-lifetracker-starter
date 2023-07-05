const express = require('express')
const User = require('../models/models')
const router = express.Router()

router.post("/sleepingData", async (request, response) => {
    const {num_of_hours, start_time, end_time, date, user_id} = request.body
    try {
        const sleep_info = await User.Exercise(num_of_hours, start_time, end_time, date, user_id)
        return response.status(200).json(sleep_info)
    } catch (error) {
        next(error)
    }

})

router.get("/sleeplogs", async (request, response, next) => {
    const {UserID} = request.body
    try{
        const sleepData = await User.fetchSleepData(UserID)
        return response.status(200).useChunkedEncodingByDefault(sleepData)
    }catch(error) {
        next(error)
    }
})

module.exports = router;