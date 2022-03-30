import React from "react";
import Image from "next/image";
import imageWeb from "../../public/images/market-ecosystem/market-ecosystem-web.jpg";
import styles from "./MarketEcosystem.module.css";

export default function MarketEcosystem() {
  return (
    <div className={styles.imageContainer}>
      {/* <Image
        src={imageWeb.src}
        alt={""}
        layout="fill"
        height={5745}
        width={1200}
      ></Image> */}
    </div>
  );
}
