function Todo({ todo, onSetTodos }) {
  async function handleMark(e, id) {
    e.stopPropagation();
    if(todo.isDone){
        console.log("already marked as done")
        return
    }
    const res = await fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: {
        id: `${todo._id}`,
      },
    });
    const data = await res.json();

    alert(data.msg);
    onSetTodos((todos) =>
      todos.map((todo) => (todo._id == id ? { ...todo, isDone: true } : todo))
    );
  }

  async function handleDelete(e, id) {
    e.stopPropagation();
    const res = await fetch("http://localhost:3000/delete", {
      method: "DELETE",
      headers: {
        id: `${todo._id}`,
      },
    });
    const data = await res.json();
    onSetTodos((Todos) => Todos.filter((todo) => id !== todo._id));
    alert(data.msg);
  }
  return (
    <div
      className="cursor-pointer hover:opacity-70 flex justify-between px-1 items-center"
      onClick={(e) => handleMark(e, todo._id)}
    >
      <div>
        <h3 className={`mt-0.5 font-bold ${todo.isDone ? "line-through" : ""}`}>
          {todo.title}
        </h3>
        <p className={`font-light ${todo.isDone ? "line-through" : ""}`}>
          {" "}
          {todo.description}
        </p>
      </div>
      <div
        onClick={(e) => handleDelete(e, todo._id)}
        className="font-bold text-red-500"
      >
        X
      </div>
    </div>
  );
}

export default Todo;
