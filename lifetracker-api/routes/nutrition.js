const express = require('express')
const User = require('../models/models')
const router = express.Router()

router.post("/addnutritiondata", async (request, response, next) => {
    const {calories, category, quantity, url} = request.body
    const user = response.locals.user
    try {
        const nutrition_info = await User.Nutrition(calories, category, quantity, url)
        return response.status(200).json(nutrition_info)
    } catch (error) {
        next(error)
    }

})

router.get("/usernutritiondata", (request, response) => {

})

module.exports = router;