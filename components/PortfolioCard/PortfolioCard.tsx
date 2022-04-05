/* eslint-disable @next/next/no-img-element */
import React, { MouseEventHandler } from "react";
import styles from "./PortfolioCard.module.css";

function PortfolioCard(props: Props) {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <img src={props.icon} alt="" className={styles.bg} />
      <div className={styles.title}>{props.title}</div>
      <div className={styles.overLayContainer}>
        <div className={styles.hiddenTitle}>{props.title}</div>
      </div>
    </div>
  );
}

export default PortfolioCard;

interface Props {
  icon?: string;
  title?: string;
  onClick: () => void;
}
