import React from "react";
import styles from "./HomeFirstBanner.module.css";

export default function HomeFirstBanner() {
  return (
    <div
      className={styles.bannerContainer}
      style={{
        backgroundImage: `url("https://getuct.com/wp-content/uploads/2021/05/Untitled-design-9.png")`,
      }}
    >
      <div className={styles.headlineSmall}>MARKETPLACE SPECIALISTS</div>
      <div className={styles.headlineBig}>MOMENTUM IS INCREASING</div>
    </div>
  );
}
