const dotenv = require('dotenv').config();
const express = require('express');
const app = express();


//enveronment variables
const PORT = process.env.SERVER_PORT ;

app.use('/api/students', require('./routes/student.js'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
console.log(PORT); 