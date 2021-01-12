import "./App.css";

const Header = () => {
  return <h1 className="title">TODO</h1>;
};

const TodoItem = () => {
  return (
    <div className='todo-item'>
      <input className="todo-item__check" type="checkbox" />
      <span className='todo-item__title'>Task-1</span>
    </div>
  );
};

const TodoList = () => {
  return (
    <section className="todos">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </section>
  );
};

const NewTaskText = () => {
  return (
    <input className='new-task' type='text' placeholder='Add Task' />
  )
}

const AddButton = () => {
  return (
    <button className='button add-button'>
      add
    </button>
  )
}

const AddTask = () => {
  return (
    <div className='add-task'>
      <NewTaskText />
      <AddButton />
    </div>
  )
}

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <TodoList />
      <AddTask/>
    </div>
  );
};

export default App;
