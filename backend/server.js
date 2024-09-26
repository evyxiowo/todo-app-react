const express = require('express');
const types = require('./types');

const app = express();

app.use(express.json());

app.get('/api/todos', (req, res) => {})

app.post('/api/todo', (req, res) => {})

app.put('/api/todos/completed', (req, res) => {})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});