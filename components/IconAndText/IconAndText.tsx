import React from "react";
import styles from "./IconAndText.module.css";
type IconAndText = {
  text: String;
  icon: any;
};
export default function IconAndText(props: IconAndText) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.icon}>{props.icon}</div>
        <div color="white" className={styles.text}>
          {props.text}
        </div>
      </div>
    </div>
  );
}
