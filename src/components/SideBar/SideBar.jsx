import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.list}>
      <li className={styles.listItem}>
          <NavLink className={styles.link} to="/">
            Main
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.link} to="/work">
            Work
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.link} to="/private">
            Private
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
