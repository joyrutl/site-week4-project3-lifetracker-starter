const express = require('express')
const User = require('../models/models')
const router = express.Router()

// router.post("/", async (request, response) => {
//     const {calories, timestamp, category, quantity} = request.body
//     try {
//         const nutrition_info = await User.Nutrition(calories, timestamp, category, quantity)
//         return response.status(200).json(nutrition_info)
//     } catch (error) {
//         next(error)
//     }

// })

router.get("/", (request, response) => {

})

module.exports = router;