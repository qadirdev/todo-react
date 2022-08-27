const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteFunc = () => {
    setTodos(todos.filter((del) => del.id !== todo.id));
  };

  const completeFunc = () => {
    setTodos(
      todos.map((it) => {
        if (it.id === todo.id) {
          return {
            ...it,
            completed: !it.completed,
          };
        }
        return it;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-tem1 ${todo.completed? "completed":""}`}>{text}</li>
      <button onClick={completeFunc} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteFunc} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
