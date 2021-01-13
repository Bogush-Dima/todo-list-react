import TodoItem from "./../TodoItem/TodoItem";

const Todos = ({ todos, setTodos }) => {
  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <section className="todos">
      {todos.map((el) => (
        <TodoItem todos={todos} todo={el} key={el.id} toggleTask={toggleTask} />
      ))}
    </section>
  );
};

export default Todos;
