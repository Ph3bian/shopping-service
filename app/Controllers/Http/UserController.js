'use strict'

class UserController {
  /**
   * Show a list of all users.
   * GET users
   */
  async index({ response }) {
    const users = await Users.query()
      .with('users')
      .fetch()
    return response.ok({ data: users, success: true })
  }
}

module.exports = UserController
