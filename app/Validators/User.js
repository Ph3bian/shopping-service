'use strict'

class User {
  static get rules() {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required',
      firstName: 'required',
      lastName: 'required'
    }
  }
}

module.exports = User
