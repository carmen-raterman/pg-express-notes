const express = require('express');
const bodyParser = require('body-parser');
const createTables = require('./utils/tables');

const app = express();
app.use(bodyParser.json());

createTables()

app.use('/api/authors', require('./routes/API/authors'));
app.use('/api/posts', require('./routes/API/posts'));

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})