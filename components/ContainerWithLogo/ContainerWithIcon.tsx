import React from "react";
import styles from "./ContainerWithIcon.module.css";
import { BsGraphUp } from "react-icons/bs";

type props = {
  icon?: any;
  title?: String;
  description?: any;
};

export default function ContainerWithIcon(props: props) {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        {props.icon ?? <BsGraphUp className={styles.icon} />}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.headLine}>{props.title}</div>
        <div className={styles.para}>{props.description}</div>
      </div>
    </div>
  );
}
