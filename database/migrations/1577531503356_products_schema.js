'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments()
      table.string('name', 255).notNullable()
      table.string('category', 255).notNullable()
      table.string('description', 255)
      table.decimal('price').notNullable()
      table.string('created_by', 255)
      table.string('slug', 255)
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductsSchema
