import Todo from "./Todo";

function UnmarkedTodos({todos,children}) {
    return (
        <div className=" mt-10 border p-3">
          <h1 className="font-bold text-2xl">{children}</h1>
          <ul>
            {todos.map((todo) => {
              return <li>{!todo.isDOne && <Todo todo={todo} />}</li>;
            })}
          </ul>
        </div>
      );
}

export default UnmarkedTodos
