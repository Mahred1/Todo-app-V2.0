const express = require("express");
const { Todo } = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/todo", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  Todo.create({
    title,
    description,
    isDone: false,
  });
  res.json({
    msg: "todo created :)",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});

  res.json(todos);
});

app.put("/completed", async (req, res) => {
  const id = req.headers.id;

  await Todo.updateOne(
    { _id: id },
    {
      isDone: true,
    }
  );
  res.json({
    msg: "todo marked as completed",
  });
});

app.delete("/delete", async (req, res) => {
  const id = req.headers.id;
  await Todo.deleteOne({ _id: id });

  res.json({
    msg: "todo has been Removed",
  });
});

app.listen(3000);
