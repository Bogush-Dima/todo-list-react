import { useState } from "react";
import styles from "./TodoList.module.css";
import AddNewTaskForm from "./components/AddNewTaskForm/AddNewTaskForm";
import SerchForm from "./components/SerchForm/SerchForm";
import TodosItems from "./components/TodosItems/TodosItems";

const TodoList = ({ todos, setTodos, allTodos }) => {
  const [serchValue, setSerchValue] = useState("");

  const [localTodos, setLocalTodos] = useState(todos)

  const toggleTask = (id) => {
    console.log(allTodos);
    setLocalTodos(
      localTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const addNewTask = (inputValue) => {
    setLocalTodos([
      ...localTodos,
      { id: allTodos.length, title: inputValue, completed: false, category: localTodos[0].category },
    ]);
    setTodos([
      ...allTodos,
      { id: allTodos.length, title: inputValue, completed: false, category: localTodos[0].category },
    ])
  };

  const deleteTask = (id) => {
    setLocalTodos(
      localTodos.filter((todo) => todo.id !== id)
    ) 
    setTodos(
      allTodos.filter((todo) => todo.id !== id)
    )
  } 

  const getNotCompletedTasks = () => localTodos.filter((todo) => !todo.completed);

  const getCompletedTasks = () => localTodos.filter((todo) => todo.completed);

  const getFilteredTasksByName = (localTodos, serchValue) =>
  localTodos.filter((el) =>
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
