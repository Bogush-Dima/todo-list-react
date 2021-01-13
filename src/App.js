import "./App.css";
import TodoList from './components/TodoList/TodoList'
// import AddNewTaskForm from './components/TodoList/AddNewTaskForm/AddNewTaskForm'

const App = () => {
  return (
    <>
      <h1 className="title">TODO</h1>
      <TodoList />
      {/* <AddNewTaskForm /> */}
    </>
  );
};

export default App;
