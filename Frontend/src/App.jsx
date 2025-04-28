import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import MarkedTodos from "./components/MarkedTodos";
import UnmarkedTodos from "./components/UnmarkedTodos";

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
      const res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
        headers: { "content-type": "application/json" },
      });

      const data = await res.json();
      setRequests((requests) => requests + 1);
      setTitle("");
      setDescription("");
      alert(data.msg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col w-60 m-auto text-white ">
      <h1 className="text-center font-extrabold text-[2rem] my-10">
        Add Your task
      </h1>
      <label>Title: </label>
      <input value={title}
        className="border w-70 h-10 mt-3 rounded-lg"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Description: </label>
      <input value={description}
        className="border w-70 h-10 mt-3 rounded-lg"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="bg-orange-400 w-30 h-10 mt-6 rounded-l cursor-pointer"
        onClick={(e) => handleAdd(e)}
      >
        Add
      </button>

      <UnmarkedTodos todos={todos} onsetRequests={setRequests}>
        Un Completed :
      </UnmarkedTodos>
      <MarkedTodos onsetRequests={setRequests} todos={todos}>
        Completed :
      </MarkedTodos>
    </div>
  );
}

export default App;
