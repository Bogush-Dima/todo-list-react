import styles from './TodoItem.module.css'

const TodoItem = ({ todo: { id, title, completed }, toggleTask, deleteTask }) => {
  return (
    <div className={styles.item}>
      <input
        className={styles.check}
        type="checkbox"
        checked={completed}
        id={id}
        onChange={() => toggleTask(id)}
      />
      <span className={`${styles.title} ${completed ? styles.done : ""}`}>
        {title}
      </span>
      <button className={styles.deleteBtn} onClick={() => deleteTask(id)}>&times;</button>
    </div>
  );
};

export default TodoItem;
