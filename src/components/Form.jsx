const Form = ({ list, setList, todos, setTodos }) => {
  const inputList = (event) => {
    setList(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        text: list,
        completed: false,
        id: Math.random() * 777,
      },
    ]);
    setList("");
  };
  return (
    <form>
      <input
        value={list}
        onChange={inputList}
        type="text"
        className="todo-input"
      />
      <button onClick={submit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
