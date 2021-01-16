import React, { useState } from "react";
import NotificationSystem from "react-notification-system";
import styles from "./TodoList.module.css";
import AddNewTaskForm from "./components/AddNewTaskForm/AddNewTaskForm";
import SerchForm from "./components/SerchForm/SerchForm";
import TodosItems from "./components/TodosItems/TodosItems";

const TodoList = ({ todos, setTodos, allTodos }) => {
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
      message: "You have this task here",
      level: "success",
    });
  };

  const addNewTask = (inputValue) => {
    const path = window.location.pathname;
    if (todos.find((todo) => todo.title === inputValue)) {
      addNotification();
    } else {
      setTodos([
        ...allTodos,
        {
          id: todos.length + 1,
          title: inputValue,
          completed: false,
          category: path,
        },
      ]);
    }
  };

  const deleteTask = (id) => {
    setTodos(allTodos.filter((todo) => todo.id !== id));
  };

  const getNotCompletedTasks = () =>
  todos.filter((todo) => !todo.completed);

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
        <NotificationSystem ref={notificationSystem} />
      </div>
    </div>
  );
};

export default TodoList;
