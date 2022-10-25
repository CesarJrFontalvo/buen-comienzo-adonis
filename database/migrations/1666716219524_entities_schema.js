'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntitiesSchema extends Schema {
  up () {
    this.create('entities', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('entities')
  }
}

module.exports = EntitiesSchema
