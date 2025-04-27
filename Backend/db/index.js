const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/todos")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    isDone:Boolean
})

const Todo = mongoose.model('Todos',todoSchema)

module.exports ={
    Todo
}