import { useState } from "react";
import "./App.css";

const TodoItem = ({todo, todo: { id, title, completed }, toggleTask }) => {
  return (
    <div className='todo-item'>
      <input
        className='todo-item__check'
        type="checkbox"
        checked={completed}
        id={id}
        onChange={() => toggleTask(id)}
      />
      <span className={`todo-item__title${completed ? ' done' : ''}`}>{title}</span>
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      completed: false,
      title: "Task-1",
    },
    {
      id: 1,
      completed: false,
      title: "Task-2",
    },
    {
      id: 2,
      completed: false,
      title: "Task-3",
    },
    {
      id: 3,
      completed: false,
      title: "Task-4",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const chengeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const addNewTask = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length, title: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <h1 className="title">TODO</h1>
      <section className="todos">
        {todos.map((el) => (
          <TodoItem
            todos={todos}
            todo={el}
            key={el.id}
            toggleTask={toggleTask}
          />
        ))}
      </section>
      <form className="add-task" onSubmit={addNewTask}>
        <input
          className="new-task"
          type="text"
          placeholder="Add Task"
          value={inputValue}
          onChange={chengeInputValue}
        />
        <button
          className="button add-button"
          type="submit"
          disabled={!inputValue}
        >
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
