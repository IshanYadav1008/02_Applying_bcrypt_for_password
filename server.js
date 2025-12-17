const express = require ('express')
const app     = express()

require('dotenv').config();
const PORT = process.env.PORT || 3000
const db      = require('./db') 

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // req.body

const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

