import { useState } from "react";
import styles from './TodoList.module.css'
import Form from "../Form/Form";
import Todos from "./Todos/Todos";

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

  return (
    <>
      <h1 className={styles.title}>TODO</h1>
      <Todos todos={todos} setTodos={setTodos} />
      <Form todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoList;
