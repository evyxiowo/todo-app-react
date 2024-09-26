const express = require('express');
const { createTodo , updateTodo} = require('./types');
const {todo} = require('./db.js');
const app = express();

app.use(express.json());

app.get('/todos', async (req, res) => {

    const todos = await todo.findAll();
res.json({todos});
     
})

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(404).json({
            msg: "You send wrong input value"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,

    })
    res.status(201).json({
        msg: "Todo created successfully"
    })
})

app.put('/completed', async(req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(404).json({
            msg: "You send wrong input value"
        })
        return;
    }
    await todo.update({
        _id: req.body.id,
    }, {
        completed: true,
    })
    res.status(200).json({
        msg: "Todo marked as completed successfully"
    })
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});