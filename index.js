const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = require('./config/corsOptions');
const knex = require('./config/knex');

app.use(cors(corsOptions))
app.use(express.json())

app.use('/numbers', require('./routes/numbers'));
app.use('/square', require('./routes/square'));
app.use('/contact', require('./routes/contact'));
app.use('/posts', require('./routes/posts'));




const port = 5000;

app.listen(port, () => {
    console.log("Server running")
})
