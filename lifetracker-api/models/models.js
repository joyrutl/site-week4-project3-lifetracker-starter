const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { BadRequestError, UnauthorizedError } = require("../utils/errors")
const {BCRYPT_WORK_FACTOR} = require('../config')
const db = require('../db')

class User {

static async Login(email, password) {
            const user = await User.fetchUserByEmail(email)
            if(user) {
                const validPassword = await bcrypt.compare(password, user.password)
                if (!validPassword) {
                    throw new UnauthorizedError("Invalid password")
                }
                return {
                    id: user.id,
                    firstname: user.first_name,
                    lastname: user.last_name,
                    username: user.username,
                    email: user.email
                }

            }
            throw new UnauthorizedError("Invalid username or password")
}


static async Register(firstname, lastname, email, username, password) {

            
            const salt = await bcrypt.genSalt(BCRYPT_WORK_FACTOR)

            const existingUserWithEmail = await User.fetchUserByEmail(email)
            if (existingUserWithEmail) {
                throw new BadRequestError(`Duplicate email: ${email}`)
            }


            const hashedPassword = await bcrypt.hash(password, salt)
            const normailzedemail = email.toLowerCase()
            const result = await db.query(`
            INSERT INTO users (first_name, last_name, email, username, password)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
            `, [firstname, lastname, normailzedemail, username, hashedPassword])
            const user = result.rows[0]
            return user
}



static async Nutrition(calories, category, quantity, url, user_id) {
    const result = await db.query(`
    INSERT INTO nutritional_data (calories, category, quantiity, url, user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `, [calories, category, quantity, url, user_id])
    const nutrition_info = result.rows[0]
    return nutrition_info
}

static async Exercise(exercise_type, duration, intensity, user_id) {
    const result = await db.query(`
    INSERT INTO exercise_data (exercise_type, duration, intensity, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [exercise_type, duration, intensity, user_id])
    const exercise_info = result.rows[0]
    return exercise_info

}

static async Sleep(){
    
}


static async fetchUserByEmail(email) {
    const result = await db.query(
      `SELECT id,
              first_name,
              last_name,
              email,
              username,
              password           
           FROM users
           WHERE email = $1`,
      [email.toLowerCase()]
    )

    const user = result.rows[0]

    return user
  }

}

module.exports = User;