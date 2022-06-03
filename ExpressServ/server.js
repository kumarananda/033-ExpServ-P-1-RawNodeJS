const dotenv = require('dotenv').config();
const express = require('express');
const app = express();


//enveronment variables
const PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000  ;

// Requast Body init
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// student Route use
app.use('/api/students', require('./routes/student.js'));

// add express server lestener with Port 5050
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
// console.log(PORT);    