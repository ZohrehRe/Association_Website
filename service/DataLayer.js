let { personTableSetup } = require("./PersonService.js");
let { eventTableSetup } = require("./EventService.js");
let { serviceTableSetup } = require("./ServiceService.js");

const sqlDbFactory = require("knex");
let sqlDb = sqlDbFactory({
    client: "pg",
    connection: process.env.DATABASE_URL || {
        host: 'localhost',
        user: 'postgres',
        pass: 'postgres',
        database: 'associationDb'
    },
    debug: true,
    ssl: true
});

function setupDataLayer() {
    console.log("Setting up data layers");
    personTableSetup(sqlDb);
    eventTableSetup(sqlDb);
    return serviceTableSetup(sqlDb);
}

module.exports = {database: sqlDb, setupDataLayer };