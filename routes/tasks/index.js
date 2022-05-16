const express = require('express');
const router = express.Router();
const { pool } = require('../../db/pg');
const { randomUUID } = require('crypto');

router.get('/', (req, res) => {
    console.log("[GET] all tasks");
    try {
        pool.query(`SELECT * FROM tasks WHERE active = true;`, (err, response) => {
            if (err) {
                console.log("Error - Failed to select all from tasks.");
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

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const title = body.title.replace("'", "''");
    console.log("[PUT] task update, id: " + id);
    console.log('body: ', body);
    const queryString = `UPDATE tasks SET title = '${title}', complete = ${body.complete}, date_created = '${body.date_created}' WHERE task_id = '${id}';`;
    console.log(queryString);
    try {
        pool.query(queryString, (err, response) => {
            if (err) {
                console.log("Error - Failed to update task: " + body);
                console.log(err);
            }
            else {
                console.log(response);
                res.send(response);
            }
        })
    } catch (e) {
        console.log(e);
    }
});

router.post('/:userId', (req, res) => {
    const userId = req.params.userId;
    const body = req.body;
    const title = body.title.replace("'", "''");
    console.log(title);
    console.log("[POST] new task for userId: " + userId);
    console.log('body: ', body);
    const queryString = `INSERT INTO tasks(task_id, user_id, date_created, title, complete) VALUES ('${body.task_id}', ${userId}, '${body.date_created}', '${title}', false);`;
    try {
        pool.query(queryString, (err, response) => {
            if (err) {
                console.log("Error - Failed to insert new task");
                console.log(err);
            }
            else {
                console.log(response);
                res.send(response);
            }
        })
    } catch (e) {
        console.log(e);
    }
});

router.put('/archive/:id', (req, res) => {
    const id = req.params.id;
    const queryString = `UPDATE tasks SET active = false WHERE task_id = '${id}';`;
    try {
        pool.query(queryString, (err, response) => {
            if (err) {
                console.log("Error - Failed to archive task");
                console.log(err);
            }
            else {
                console.log(response);
                res.send(response);
            }
        })
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;