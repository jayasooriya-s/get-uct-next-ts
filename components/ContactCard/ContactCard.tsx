import React from "react";
import styles from "./ContactCard.module.css";

interface Props {
  icon?: any;
  title?: String;
  detail?: any;
}
export default function ContactCard(props: Props) {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.icon_container}>{props.icon}</div>
        <div className={styles.text_container}>
          <div className={styles.title}>{props.title}</div>
          <p className={styles.detail}>{props.detail}</p>
        </div>
      </div>
    </div>
  );
}
