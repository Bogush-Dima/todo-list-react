import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const storageTodos = JSON.parse(localStorage.getItem("todos"))
  const [todos, setTodos] = useState(storageTodos || [])
    // if(storageTodos.isArray()) {
    //   return storageTodos
    // } else {
    //   return []
    // }
    // JSON.parse(localStorage.getItem("todos"))
    //   [
    //   {
    //     id: 0,
    //     completed: false,
    //     category: "work",
    //     title: "Work-1",
    //   },
    //   {
    //     id: 1,
    //     completed: false,
    //     category: "work",
    //     title: "Work-2",
    //   },
    //   {
    //     id: 2,
    //     completed: false,
    //     category: "private",
    //     title: "Private-1",
    //   },
    //   {
    //     id: 3,
    //     completed: false,
    //     category: "private",
    //     title: "Private-2",
    //   },
    // ]
  // );

  localStorage.setItem("todos", JSON.stringify(todos));

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
