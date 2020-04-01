const knex = require('knex');

const configuartion = require('../../knexfile');

const connection = knex(configuartion.development);

module.exports = connection;