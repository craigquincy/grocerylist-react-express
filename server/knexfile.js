'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/groceries'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};