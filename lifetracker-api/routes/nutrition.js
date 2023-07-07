const express = require('express')
const User = require('../models/models')
const router = express.Router()

router.post("/addnutritiondata", async (request, response, next) => {
    const {name, calories, category, quantity, url, UserID} = request.body
    try {
        const nutrition_info = await User.Nutrition(name, calories, category, quantity, url, UserID)
        return response.status(200).json(nutrition_info)
    } catch (error) {
        next(error)
    }

})

router.get("/usernutritiondata/:id", async (request, response, next) => {
    console.log(request.params.id)
    const UserID = request.params.id
    try{
        const nutritionalData = await User.fetchNutritionalData(UserID)
        return response.status(200).json(nutritionalData.rows)
    } catch (error) {
        next(error)
    }
})

module.exports = router;