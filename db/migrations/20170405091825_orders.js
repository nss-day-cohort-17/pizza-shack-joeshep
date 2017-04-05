
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', (table) => {
  	table.increments();
  	table.string('name').notNullable();
  	table.string('email').notNullable();
  	table.string('phone').notNullable();
  	table.string('size').notNullable();
  	table.specificType('toppings', knex.raw('text[]')).notNullable().defaultTo('{"cheese"}')
  //^^ says going to use another data type
  //since can't just say array in knex, takes 2 args
  //first is header on column (toppings)
  //second is what type is going to be (knex.raw('text or int[array]')) --an array full of text strings
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
