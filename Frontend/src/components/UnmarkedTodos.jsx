import Todo from "./Todo";

function UnmarkedTodos({ todos, onSetTodos, children }) {
  return (
    <div className=" mt-10 border p-3">
      <h1 className="font-bold text-2xl">{children}</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo._id}>
              {!todo.isDone && (
                <Todo key={todo._id} onSetTodos={onSetTodos} todo={todo} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UnmarkedTodos;
