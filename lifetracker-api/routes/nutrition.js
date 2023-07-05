const express = require('express')
const User = require('../models/models')
const router = express.Router()

router.post("/addnutritiondata", async (request, response, next) => {
    const {name, calories, category, quantity, url, user_id} = request.body
    try {
        const nutrition_info = await User.Nutrition(name, calories, category, quantity, url, user_id)
        return response.status(200).json(nutrition_info)
    } catch (error) {
        next(error)
    }

})

router.get("/usernutritiondata", async (request, response, next) => {
    const {UserID} = request.body
    try{
        const nutritionalData = await User.fetchNutritionalData(UserID)
        return response.status(200).json(nutritionalData)
    } catch (error) {
        next(error)
    }
})

module.exports = router;