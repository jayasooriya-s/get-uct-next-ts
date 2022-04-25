import React from "react";
import styles from "./Loader.module.css";
import { FiLoader } from "react-icons/fi";
function Loader() {
  return (
    <div className={styles.loader}>
      <div>
        <FiLoader className={styles.loading_icon}></FiLoader>
      </div>
    </div>
  );
}

export default Loader;
