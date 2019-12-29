'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ auth, response }, next) {
    try {
      const { user_type } = await auth.getUser()
      if (user_type !== 'admin') {
        throw new Error()
      }
      // call next to advance the request
      await next()
    } catch (error) {
      response.badRequest({
        success: false,
        message: 'You are not authorized to make this request'
      })
    }
  }
}

module.exports = Admin
