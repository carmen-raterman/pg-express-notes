const express = require('express');
const router = express.Router();
const pool = require('../../utils/pool');

router.get('/', async (req, res) => {
    try {
        const query = "SELECT p.*, a.name AS author_name, a.email AS author_email FROM posts p INNER JOIN authors a ON p.author_id = a.id";
        const result = await pool.query(query);
        return res.json(result.rows);

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "there was an error while getting the posts"});
        
    }
})

module.exports = router;