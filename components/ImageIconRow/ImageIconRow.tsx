import React from "react";
import styles from "./ImageIconRow.module.css";
import ContainerWithIcon from "../ContainerWithLogo/ContainerWithIcon";

type props = {
  description?: any;
  title?: String;
  imgUrl?: String;
  icon?: any;
  isImageFirst?: Boolean;
};
export default function ImageIconRow(props: props) {
  if (props.isImageFirst ?? true) {
    return (
      <div className={styles.descriptionAndImage}>
        <div
          className={styles.rowImage}
          style={{
            backgroundImage: `url(${props.imgUrl})`,
          }}
        />
        <ContainerWithIcon
          icon={props.icon}
          title={props.title}
          description={props.description}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.descriptionAndImage}>
        <ContainerWithIcon
          icon={props.icon}
          title={props.title}
          description={props.description}
        />
        <div
          className={styles.rowImage}
          style={{
            backgroundImage: `url(${props.imgUrl})`,
          }}
        />
      </div>
    );
  }
}
