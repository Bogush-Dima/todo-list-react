import { useState } from "react";
import "./App.css";

const TodoItem = ({ todo: { title, completed } }) => {
  return (
    <div className="todo-item">
      <input
        className="todo-item__check"
        type="checkbox"
        // checked={completed}
      />
      <span className="todo-item__title">{title}</span>
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   completed: false,
    //   title: "Task-1",
    // },

    // {
    //   id: 2,
    //   completed: false,
    //   title: "Task-2",
    // },

    // {
    //   id: 3,
    //   completed: true,
    //   title: "Task-3",
    // },

    // {
    //   id: 4,
    //   completed: false,
    //   title: "Task-4",
    // },
  ]);

  const [inputValue, setInputValue] = useState('');

  const chengeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const addNewTask = () => {
    console.log(
      inputValue
    );
    setTodos([
      { id: 10, title: inputValue, completed: false },
    ]);
  };

  console.log(todos);

  return (
    <>
      <h1 className="title">TODO</h1>
      <section className="todos">
        {todos.map((el) => (
          <TodoItem todo={el} key={el.id} />
        ))}
      </section>
      <form className="add-task">
        <input
          className="new-task"
          type="text"
          placeholder="Add Task"
          value={inputValue}
          onChange={chengeInputValue}
        />
        <button className="button add-button" onClick={addNewTask}>
          add
        </button>
      </form>
    </>
  );
};

const App = () => {
  return (
    <div className="wrapper">
      <TodoList />
    </div>
  );
};

export default App;