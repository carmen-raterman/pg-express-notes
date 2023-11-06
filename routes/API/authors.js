const express = require('express');
const router = express.Router();
const pool = require('../../utils/pool');

//this is my post request
router.post('/new', async (req, res) => {
    try {
        const {name, email} = req.body;
        const query = 'INSERT INTO authors(name, email) VALUES ($1,$2) RETURNING *';
        const values = [name, email];
        const result = await pool.query(query, values);
        return res.json(result.rows[0]); //return the first row
        //$ tells us the position, name goes to position 1 and email to position 2
        //* is to return everything added
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"there is an error while creating the user"})
    }
})

module.exports = router;