import styles from './TodoItem.module.css'
import clsx from 'clsx'

const TodoItem = ({ todo: {id, title, completed}, deleteTask, toggleTask }) => {
  return (
    <div className={styles.item}>
      <input
        className={styles.check}
        type="checkbox"
        checked={completed}
        id={id}
        onChange={() => toggleTask(id)}
      />
      <span className={clsx(styles.title, {[styles.done]: completed})}>
        {title}
      </span>
      <button className={styles.deleteBtn} onClick={() => deleteTask(id)}>&times;</button>
    </div>
  );
};

export default TodoItem;