const { Pool } = require('pg');
require('dotenv').config();
const dbURI = process.env.DB_URI;
const pool = new Pool({
    connectionString:dbURI,
    ssl:{
        rejectUnauthorized:false
    }
});
module.exports = { pool };