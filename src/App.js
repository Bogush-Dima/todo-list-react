import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styles from "App.module.css";
import Main from "components/Main/Main";
import SideBar from "components/SideBar/SideBar";
import TodoList from "components/TodoList/TodoList";

const App = () => {
  const storageTodos = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(storageTodos || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const getTodosByCategory = (category) =>
    todos.filter((todo) => todo.category === category);

  return (
    <BrowserRouter>
      <div className={styles.mainWrapper}>
        <div className={styles.wrapper}>
          <SideBar />
          <Route exact path="/">
            <Main />
          </Route>
          <Route
            path="/work"
            render={() => {
              return (
                <TodoList
                  title="WORK"
                  todos={getTodosByCategory("work")}
                  setTodos={setTodos}
                  allTodos={todos}
                />
              );
            }}
          />
          <Route
            path="/private"
            render={() => {
              return (
                <TodoList
                  title="PRIVATE"
                  todos={getTodosByCategory("private")}
                  setTodos={setTodos}
                  allTodos={todos}
                />
              );
            }}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
