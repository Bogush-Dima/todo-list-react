import styles from "./TodoItem.module.css";
import clsx from "clsx";

const TodoItem = ({
  todo: { id, title, completed },
  deleteTask,
  toggleTask,
}) => {
  return (
    <label className={styles.item}>
      <input
        className={styles.check}
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      <span className={styles.fake} />
      <span className={clsx(styles.text, { [styles.done]: completed })}>
        {title}
      </span>
      <button className={styles.deleteBtn} onClick={() => deleteTask(id)}>
        &times;
      </button>
    </label>
  );
};

export default TodoItem;
