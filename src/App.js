import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    // {
    //   id: 0,
    //   completed: false,
    //   category: "/work",
    //   title: "Work-1",
    // },
    // {
    //   id: 1,
    //   completed: false,
    //   category: "/work",
    //   title: "Work-2",
    // },
    // {
    //   id: 2,
    //   completed: false,
    //   category: "/private",
    //   title: "Private-1",
    // },
    // {
    //   id: 3,
    //   completed: false,
    //   category: "/private",
    //   title: "Private-2",
    // },
  ]);

  const getTodosByCategory = (category) =>
    todos.filter((todo) => todo.category === category);

  return (
    <BrowserRouter>
      <div className={styles.mainWrapper}>
        <Header />
        <div className={styles.wrapper}>
          <SideBar />
          <Route exact path='/'>
          <div className={styles.hello}>
            <p className={styles.helloText}>TROLOLOLOLO</p>
          </div>
          </Route>
          <Route path="/work">
            <TodoList todos={getTodosByCategory("/work")} setTodos={setTodos} allTodos={todos} />
          </Route>
          <Route path="/private">
            <TodoList
              todos={getTodosByCategory("/private")} setTodos={setTodos} allTodos={todos} />
          </Route>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
