const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { BadRequestError, UnauthorizedError } = require("../utils/errors")
const {BCRYPT_WORK_FACTOR} = require('../config')
const db = require('../db')

class User {

static async generateUserQuery(firstname, lastname, email, username, password) {
            const salt = await bcrypt.genSalt(BCRYPT_WORK_FACTOR)

            const existingUserWithEmail = await User.fetchUserByEmail(email)
            if (existingUserWithEmail) {
                throw new BadRequestError(`Duplicate email: ${email}`)
            }


            const hashedPassword = await bcrypt.hash(password, salt)
            const normailzedemail = email.toLowerCase()
            const result = await db.query(`
            INSERT INTO users (firstname, lastname, email, username, password)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
            `, [firstname, lastname, normailzedemail, username, hashedPassword])
            const user = createUserQuery.rows[0]
            return user
}


static async fetchUserByEmail(email) {
    const result = await db.query(
      `SELECT id,
              email, 
              password,
              first_name AS "firstName",
              last_name AS "lastName",
              location,
              date              
           FROM users
           WHERE email = $1`,
      [email.toLowerCase()]
    )

    const user = result.rows[0]

    return user
  }

}