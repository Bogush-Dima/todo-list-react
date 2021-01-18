import React, { useState } from "react";
import NotificationSystem from "react-notification-system";
import styles from "./TodoList.module.css";
import clsx from 'clsx'
import AddNewTaskForm from "./components/AddNewTaskForm/AddNewTaskForm.jsx";
import SerchForm from "./components/SerchForm/SerchForm";
import TodosItems from "./components/TodosItems/TodosItems";

const TodoList = ({ title, todos, setTodos, allTodos }) => {
  const notificationSystem = React.useRef();

  const [serchValue, setSerchValue] = useState("");

  const toggleTask = (id) => {
    setTodos(
      allTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const addNotification = () => {
    const notification = notificationSystem.current;
    notification.addNotification({
      message: "You are already have task with the same name",
      level: "warning",
    });
  };

  const addNewTask = (inputValue, setInputValue) => {
    const path = window.location.pathname.slice(1);
    if (todos.find((todo) => todo.title === inputValue)) {
      addNotification();
      setInputValue(inputValue)
    } else {
      setTodos([
        ...allTodos,
        {
          id: Math.random(),
          title: inputValue,
          completed: false,
          category: path,
        },
      ]);
      setInputValue('')
    }
  };

  const deleteTask = (id) => {
    setTodos(allTodos.filter((todo) => todo.id !== id));
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
        <h1 className={styles.title}>{title}</h1>
        <section className={styles.todos}>
          <TodosItems
            items={getFilteredTasksByName(getNotCompletedTasks(), serchValue)}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </section>
        <AddNewTaskForm addNewTask={addNewTask} />
        <NotificationSystem ref={notificationSystem} />
        <section className={styles.completedTasks}>
          <h2 className={clsx(styles.completedTitle, {[styles.completedTitileTrue]: getCompletedTasks().length !== 0})}>COMPLETED TASKS</h2>
          <TodosItems
            items={getFilteredTasksByName(getCompletedTasks(), serchValue)}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </section>
      </div>
    </div>
  );
};

export default TodoList;
