const express = require('express');
const router = express.Router();
const { pool } = require('../../db/pg');

router.get('/', (req, res) => {
    console.log("[GET] test");
    try {
        pool.query(`SELECT * FROM tasks;`, (err, response) => {
            if (err) {
                console.log("Error - Failed to select all from Users");
                console.log(err);
            }
            else{
                console.log(response.rows);
                res.send(response.rows);
            }
        });
    } catch (e) {
        console.log(e);
    }
        
});

module.exports = router;