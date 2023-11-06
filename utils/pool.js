const {Pool} = require('pg');

const pool = new Pool({
    user: 'csophia',
    database:'postgres',
    port: 5432
});

module.exports = pool;