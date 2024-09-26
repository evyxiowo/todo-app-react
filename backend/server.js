const express = require('express');
const { createTodo , updateTodo} = require('./types');

const app = express();

app.use(express.json());

app.get('/todos', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(404).json({
            msg: "You send wrong input value"
        })
        return;
    }
})

app.post('/todo', (req, res) => {})

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(404).json({
            msg: "You send wrong input value"
        })
        return;
    }
    
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});