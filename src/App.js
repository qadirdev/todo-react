import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

const App = () => {
  const [list, setList] = useState("");
  const [todos,setTodos] =useState([])
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form list={list} setList={setList} todos={todos} setTodos={setTodos} />
      <List todos={todos}  setTodos={setTodos}/>
    </div>
  );
};

export default App;
