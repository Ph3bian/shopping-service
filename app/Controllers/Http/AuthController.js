'use strict'
const { validate } = use('Validator')
const User = use('App/Models/User')
class AuthController {
  /**
   *  Handle user login.
   * POST /auth/login
   */

  async login({ auth, request, response }) {
    try {
      const { email, password } = request.all()
      const user = await auth.attempt(email, password)
      const { token } = user

      if (!user) {
        throw new Error()
      }
      const userDetails = await User.findByOrFail('email', email)

      return {
        success: true,
        message: 'Logged in successfully',
        profile: userDetails,
        token
      }
    } catch (error) {
      return response.unauthorized({
        success: false,
        message: 'Invalid credentails'
      })
    }
  }
  /**
   *  Handle forgot password.
   * POST /reset-password
   */

  async resetPassword({ auth, request, response }) {
    try {
      const { email } = request.all()
      let user = await auth.attempt(email, password, true)
      if (!user) {
        throw new Error()
      }
      return {
        success: true,
        message: 'Password reset successful'
      }
    } catch (error) {
      return response.unauthorized({
        success: false,
        message: 'User does not exist'
      })
    }
  }
  /**
   *  Register new user.
   * POST /auth/register
   */

  async register({ auth, request, response }) {
    try {
      const userData = request.all()

      const rules = {
        username: 'required|unique:users',
        email: 'required|email|unique:users',
        password: 'required',
        first_name: 'required',
        last_name: 'required'
      }

      let validation = await validate(userData, rules)

      if (validation.fails()) {
        return response.badRequest(validation.messages())
      }
      const user = await User.findOrCreate(
        { username: userData.username },
        userData
      )
      const { token } = await auth.generate(user)
      return response.created({
        success: true,
        message: 'Welcome on board',
        profile: user,
        token
      })
    } catch (error) {
      return response.unauthorized({
        success: false,
        message: 'Oops an error occured',
        error
      })
    }
  }
}

module.exports = AuthController
