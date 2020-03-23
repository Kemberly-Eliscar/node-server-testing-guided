const knex = require("knex")
const knexfile = require("../knexfile")

// we are checking our environment from NODE_ENV and we are defaulting to the environment of 'dev' 
const environment = process.env.NODE_ENV || "dev"

// and we are using that to pull in the database config from the knex file
module.exports = knex(knexfile[environment])
