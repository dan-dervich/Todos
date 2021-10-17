const mongoose = require('mongoose')
const {
    Schema
} = mongoose
require('dotenv').config()


mongoose.connect(process.env.MONGOOSE_URL, {
    'useNewUrlParser': true,
    'useUnifiedTopology': true
}).catch(err => {
    console.log(err);
})
const schema = new Schema({
    email: {
        type: String,
    },
    daily_todos: {
        todo_name: String,
        todo: String,
    },
    weekly_todos: {
        todo_name: String,
        todo: String,
    },
    monthly_todos: {
        todo_name: String,
        todo: String,
    },
    yearly_todos: {
        todo_name: String,
        todo: String,
    },
    todo_type: String
})
const Todos = mongoose.model('todos', schema)

module.exports = Todos