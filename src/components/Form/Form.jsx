import { useState } from "react";
import styles from './Form.module.css'

const Form = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const chengeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const addNewTask = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length, title: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  return (
    <form className={styles.form} onSubmit={addNewTask}>
      <input
        className="new-task"
        type="text"
        placeholder="Add Task"
        value={inputValue}
        onChange={chengeInputValue}
      />
      <button
        className="button add-button"
        type="submit"
        disabled={!inputValue}
      >
        add
      </button>
    </form>
  );
};

export default Form;
