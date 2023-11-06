const pool = require('./pool');

//Create tables if they don't exist
const createTables = async () => {
    try{
        await pool.query(`
        CREATE TABLE IF NOT EXISTS authors (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
        )
        `);

        await pool.query(`
        CREATE TABLE IF NOT EXISTS posts (
            id SERIAL PRIMARY KEY,
            publication_date DATE NOT NULL,
            title VARCHAR(255) NOT NULL,
            author_id INT REFERENCES authors(id) ON DELETE CASCADE
        )
        `);
            //on delete cascade means if you deelte an author delete all the posts associated with it
            //on delete protect is the opposite
        console.log('Tables created successfully');
    } catch (error) {
        console.log('Error creating tables', error);
    }
};

module.exports = createTables;