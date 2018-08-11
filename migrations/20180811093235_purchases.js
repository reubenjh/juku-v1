
exports.up = function(knex, Promise) {
    return knex.schema.createTable('purchases', table => {
        table.increments('id').primary()
        table.timestamp('purchased_at').defaultTo(knex.fn.now())
        table.string('print_id')
        table.integer('quantity')
        table.string('email_address')
        table.string('postal_address')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('purchases')
  };
  