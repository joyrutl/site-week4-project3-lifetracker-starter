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



static async Nutrition(name, calories, category, quantity, url, user_id) {
    const result = await db.query(`
    INSERT INTO nutritional_data (name, calories, category, quantiity, url, user_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `, [name, calories, category, quantity, url, user_id])
    const nutrition_info = result.rows[0]
    return nutrition_info
}

static async Exercise(name, category, duration, intensity, user_id) {
    const result = await db.query(`
    INSERT INTO exercise_data (name, exercise_type, duration, intensity, user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `, [name, category, duration, intensity, user_id])
    const exercise_info = result.rows[0]
    return exercise_info

}

static async Sleep(start_time, end_time, user_id) {
    const startdateObject = new Date(start_time)
    const enddateObject = new Date(end_time)
    const formatted_start_time = startdateObject.toISOString().slice(0, 19).replace('T', ' ');
    const formatted_end_time = enddateObject.toISOString().slice(0, 19).replace('T', ' ');
    console.log(formatted_end_time)
    console.log(formatted_start_time)
    const result = await db.query(`
    INSERT INTO sleep_data (start_time, end_time, user_id)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [formatted_start_time, formatted_end_time, user_id])
    const sleep_info = result.rows[0]
    return sleep_info

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

  static async fetchNutritionalData(id) {
        const result = await db.query(
            `SELECT name,
                    calories, 
                    category, 
                    quantiity, 
                    url
                FROM nutritional_data
                WHERE user_id = $1`,
                [id]
        )
        const nutritionalData = result;
        return nutritionalData
  }

  static async fetchExerciseData(id) {
    const result = await db.query(
    `SELECT name,
            exercise_type, 
            duration, 
            intensity
        FROM exercise_data
        WHERE user_id = $1`,
        [id]
    )
    const exerciseData = result
    return exerciseData
  }

  static async fetchSleepData(id) {
    const result = await db.query(
        `SELECT start_time, 
                end_time
            FROM sleep_data
            WHERE user_id = $1`,
            [id]
    )
    const sleepData = result
    return sleepData
  }

}

module.exports = User;