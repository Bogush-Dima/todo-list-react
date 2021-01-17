import { useState } from "react";
import styles from "./AddNewTaskForm.module.css";

const Form = ({ addNewTask }) => {
  const [inputValue, setInputValue] = useState("");

  const chengeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewTask(inputValue);
    setInputValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.newTask}
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
