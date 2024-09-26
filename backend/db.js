const mongoose = require('mongoose')

// Connect to MongoDB

mongoose.connect("mongodb+srv://evy:7830023044@evyyx.sqlg1.mongodb.net/todos-app-react")

const todosSchema = mongoose.Schema({

    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {todo: todo};