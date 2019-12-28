'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments()
      table
        .string('username', 80)
        .notNullable()
        .unique()
      table
        .string('email', 254)
        .notNullable()
        .unique()
      table.string('password', 60).notNullable()
      table.string('first_name', 60).notNullable()
      table.string('last_name', 60).notNullable()
      table.string('gender', 60)
      table.timestamp('dob', 60)
      table
        .string('user_type', 60)
        .notNullable()
        .defaultTo('user')
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
