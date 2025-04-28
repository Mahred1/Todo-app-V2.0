import Todo from "./Todo";

function MarkedTodos({ todos, onSetTodos, children }) {
  return (
    <div className=" mt-10 border p-3">
      <h1 className="font-bold text-2xl">{children}</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo._id}>
              {todo.isDone && <Todo onSetTodos={onSetTodos} todo={todo} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MarkedTodos;
