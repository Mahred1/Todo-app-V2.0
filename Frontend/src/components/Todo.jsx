function Todo({ todo }) {
    function handleMark(){
        
    }
  return (
    <div onClick={handleMark}>
      <h3 className="mt-0.5 font-bold">{todo.title}</h3>
      <p className="font-light"> {todo.description}</p>
    </div>
  );
}

export default Todo;
