import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";
import TodoList from "./components/TodoList/TodoList";

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
        <Header />
        <div className={styles.wrapper}>
          <SideBar />
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/work">
            <TodoList
              title="WORK"
              todos={getTodosByCategory("work")}
              setTodos={setTodos}
              allTodos={todos}
            />
          </Route>
          <Route path="/private">
            <TodoList
              title="PRIVATE"
              todos={getTodosByCategory("private")}
              setTodos={setTodos}
              allTodos={todos}
            />
          </Route>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
