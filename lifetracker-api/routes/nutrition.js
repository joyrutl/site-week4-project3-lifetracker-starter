const express = require('express')
const User = require('../models/models')
const router = express.Router()

router.post("/addnutritiondata", async (request, response, next) => {
    const {calories, timestamp, category, quantity} = request.body
    try {
        const nutrition_info = await User.Nutrition(calories, timestamp, category, quantity)
        return response.status(200).json(nutrition_info)
    } catch (error) {
        next(error)
    }

})

router.get("/usernutritiondata", (request, response) => {

})

module.exports = router;