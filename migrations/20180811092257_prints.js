
exports.up = function(knex, Promise) {
  return knex.schema.createTable('prints', table => {
      table.increments('id').primary()
      table.string('title')
      table.string('image', 1000)
      table.string('description', 1000)
      table.integer('quantity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('prints')
};
