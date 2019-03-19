exports.up = function(knex, Promise) {
  return knex.schema.createTable('groceries', function(table) {
    table.increments()
    table.varchar('name', 255).notNullable()
    table.integer('quantity').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('groceries')
}
