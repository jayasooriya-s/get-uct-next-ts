import React from "react";
import styles from "./TopBanner.module.css";

type props = {
  backgroundImage: String;
  title?: String;
  titleBig?: String;
};
export default function TopBanner(props: props) {
  return (
    <div
      className={styles.bannerContainer}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <div className={styles.textContainer}>
        <div className={styles.headlineSmall}>{props.title}</div>
        <div className={styles.headlineBig}>{props.titleBig}</div>
      </div>
    </div>
  );
}
