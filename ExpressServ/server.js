const express = require('express');
const app = express();


app.get('/api/students', (req, res) => {

    res.send('Get route done');
});

app.post('/api/students', (req, res) => {

    res.send('POST route done');
});

app.put('/api/students/:id', (req, res) => {

    res.send(`PUT route done with ID - ${req.params.id}`);
});

app.patch('/api/students/:id', (req, res) => {

    res.send(`PUT route done with ID - ${req.params.id}`);
});

app.listen('5050', () => {
    console.log(`Server is running on port 5050`);
})