'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const User = use('App/Models/User')
class UserSeeder {
  async run() {
    await User.findOrCreate(
      { username: 'phibi' },
      {
        username: 'phibi',
        email: 'phebianchukwurah@gmail.com',
        password: 'password',
        first_name: 'Phebian',
        last_name: 'Chukwurah',
        gender: 'Female'
      }
    )
  }
}

module.exports = UserSeeder
