import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
    </div>
  );
}

export default App;
