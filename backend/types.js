const zod = require('zod');

const createTodo = zod.object({
    title: zod.string().min(1).max(100).required(),
    description: zod.string().min(1).max(500).optional(),
    dueDate: zod.date().optional(),
    completed: zod.boolean().optional(),
    priority: zod.enum(['low','medium', 'high']).optional(),
    createdAt: zod.date().optional(),
    updatedAt: zod.date().optional(),
})

const updateTodo = zod.object({
    id: zod.string(),
    title: zod.string().min(1).max(100).optional(),
    description: zod.string().min(1).max(500).optional(),
    dueDate: zod.date().optional(),
    completed: zod.boolean().optional(),
    priority: zod.enum(['low','medium', 'high']).optional(),
    updatedAt: zod.date().optional(),
})


module.exports = {
    createTodo,
    updateTodo,
 };
