const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe.only('Users Endpoints', () => {
    let db

    const { testUsers } = helpers.makeThingsFixtures()

    before('make knex instance', () => {
        
    })
})