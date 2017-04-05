
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', (table) => {
  	table.increments();
  	//^^ is will auto name as id in column name
  	table.string('name').notNullable();
  	table.string('email').notNullable();
  	table.string('phone').notNullable();
  	table.string('message').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts')
};
