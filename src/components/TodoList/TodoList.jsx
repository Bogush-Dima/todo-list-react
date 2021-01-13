import { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import AddNewTaskForm from "./AddNewTaskForm/AddNewTaskForm";

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

  const addNewTask = (inputValue) => {
    setTodos([
      ...todos,
      { id: todos.length, title: inputValue, completed: false },
    ]);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <section className="todos">
        {todos.map((el) => (
          <TodoItem
            todos={todos}
            todo={el}
            key={el.id}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </section>
      <AddNewTaskForm addNewTask={addNewTask} />
    </>
  );
};

export default TodoList;
