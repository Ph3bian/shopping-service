'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments()
      table.timestamps()
      table.string('name', 255).notNullable()
      table.string('category', 80)
      table.string('description', 255)
      table.decimal('price').notNullable()
      table.string('created_by', 255)
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductsSchema
