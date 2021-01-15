import { useState } from "react";
import styles from "./TodoList.module.css";
import AddNewTaskForm from "./components/AddNewTaskForm/AddNewTaskForm";
import SerchForm from "./components/SerchForm/SerchForm";
import TodosItems from "./components/TodosItems/TodosItems";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      completed: false,
      title: "adsafsdaff",
    },
    {
      id: 1,
      completed: false,
      title: "asdgfdsfgdf",
    },
    {
      id: 2,
      completed: false,
      title: "dfghfdh",
    },
    {
      id: 3,
      completed: false,
      title: "fghgfjhfgj",
    },
  ]);

  const [serchValue, setSerchValue] = useState("");

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

  const getNotCompletedTasks = () => todos.filter((todo) => !todo.completed);

  const getCompletedTasks = () => todos.filter((todo) => todo.completed);

  const getFilteredTasksByName = (todos, serchValue) =>
    todos.filter((el) =>
      el.title.toLowerCase().includes(serchValue.toLowerCase())
    );

  return (
    <div className={styles.wrapper}>
      <div>
        <SerchForm serchValue={serchValue} setSerchValue={setSerchValue} />
        <h1 className={styles.title}>TODO</h1>
        <section className={styles.todos}>
          <TodosItems
            items={getFilteredTasksByName(getNotCompletedTasks(), serchValue)}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </section>
        <section className={styles.completedTasks}>
          <h2>COMPLETED TASKS</h2>
          <TodosItems
            items={getFilteredTasksByName(getCompletedTasks(), serchValue)}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </section>
        <AddNewTaskForm addNewTask={addNewTask} />
      </div>
    </div>
  );
};

export default TodoList;
