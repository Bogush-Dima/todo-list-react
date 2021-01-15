import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <TodoList />
      </div>
      <Footer />
    </div>
  );
};

export default App;
