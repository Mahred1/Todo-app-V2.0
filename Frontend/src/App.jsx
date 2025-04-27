import { useEffect, useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [requests, setRequests] = useState(0);

  
  useEffect(
    function () {
      const getTodos = async () => {
        const res = await fetch("http://localhost:3000/todos", {
          method: "GET",
        });
        const data = await res.json();
        setTodos(data);
      };
      getTodos();
    },
    [requests]
  );

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      setRequests((requests) => requests+1);

      const res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
        headers: { "content-type": "application/json" },
      });

      const data = await res.json();

      alert(data.msg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app">
      <h1>Add Your task</h1>
      <label>Title: </label>
      <input name="title" onChange={(e) => setTitle(e.target.value)} />
      <br />
      <label>Description: </label>
      <input
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={(e) => handleAdd(e)}>Add</button>

      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
