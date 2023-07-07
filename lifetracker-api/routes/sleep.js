const express = require('express')
const User = require('../models/models')
const router = express.Router()

router.post("/sleepingData", async (request, response, next) => {
    const {start_time, end_time, UserID} = request.body
    try {
        const sleep_info = await User.Sleep(start_time, end_time, UserID)
        return response.status(200).json(sleep_info)
    } catch (error) {
        next(error)
    }

})

router.get("/sleeplogs/:id", async (request, response, next) => {
    const UserID = request.params.id
    try{
        const sleepData = await User.fetchSleepData(UserID)
        return response.status(201).json(sleepData.rows)
    }catch(error) {
        next(error)
    }
})

module.exports = router;