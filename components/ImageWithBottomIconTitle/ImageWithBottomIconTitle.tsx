import React from "react";
import Background from "../../pages/Background";
import styles from "./ImageWithBottomIconTitle.module.css";

type props = {
  imgUrl: String;
  title: String;
  icon: any;
};

export default function ImageWithBottomIconTitle(props: props) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${props.imgUrl})`,
      }}
    >
      <div className={styles.iconAndTitle}>
        <div className={styles.iconContainer}>{props.icon}</div>
        <div className={styles.title}>{props.title}</div>
      </div>
    </div>
  );
}
