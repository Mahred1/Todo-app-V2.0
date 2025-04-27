const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://markreonal815:5cSEjIrVDPj6egP5@cluster0.qudzmnh.mongodb.net/Todo")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    isDone:Boolean
})

const Todo = mongoose.model('Todos',todoSchema)

module.exports ={
    Todo
}