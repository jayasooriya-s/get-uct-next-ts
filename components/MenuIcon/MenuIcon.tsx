import { type } from "os";
import React from "react";
import styles from "./MenuIcon.module.css";

type MenuProps = {
  handleClick: () => void;
};
export default function MenuIcon(props: MenuProps) {
  return (
    <div className={styles.container} onClick={props.handleClick}>
      <div className={styles.container1}></div>
      <div className={styles.container2}></div>
      <div className={styles.container3}></div>
    </div>
  );
}
