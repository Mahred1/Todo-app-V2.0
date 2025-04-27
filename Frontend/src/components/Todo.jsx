import { useState } from "react";
function Todo({ todo }) {
  const [isMarked, setIsMarked] = useState(todo.isDone);

  async function handleMark(e) {
    e.stopPropagation()

    const res = await fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: {
        id: `${todo._id}`,
      },
    });
    const data = await res.json();
    setIsMarked((isMarked) => isMarked);
    alert(data.msg);
  }

  async function handleDelete(e) {
    e.stopPropagation()
    const res = await fetch("http://localhost:3000/delete", {
      method: "DELETE",
      headers: {
        id: `${todo._id}`,
      },
    });
    const data = await res.json();
    alert(data.msg);
  }
  return (
    <div
      className="cursor-pointer hover:opacity-70 flex justify-between px-1 items-center"
      onClick={(e) => handleMark(e)}
    >
      <div>
        <h3 className={`mt-0.5 font-bold ${isMarked ? "line-through" : ""}`}>
          {todo.title}
        </h3>
        <p className={`font-light ${isMarked ? "line-through" : ""}`}>
          {" "}
          {todo.description}
        </p>
      </div>
      <div onClick={(e) => handleDelete(e)} className="font-bold text-red-500">
        X
      </div>
    </div>
  );
}

export default Todo;
