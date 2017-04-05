'use strict';

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex)

bookshelf.plugin(require('bookshelf-bcrypt'));
//^^can turn user passwords into hash
module.exports = { knex, bookshelf };
