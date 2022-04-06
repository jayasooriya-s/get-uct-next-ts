import React from "react";
import styles from "./Footer.module.css";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import IconAndText from "../IconAndText/IconAndText";
import logo from "/public/logo.png";
import bg from "../../public/footer.avif";

export default function Footer() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.margin}>
        <div className={styles.container_info_logo}>
          <div className={styles.container_info_center}>
            <div className={styles.container_info}>
              <div className={styles.info}>
                <IconAndText
                  icon={<FaHome />}
                  text="724 Tamani Arts, Business Bay, Dubai"
                />
                <IconAndText icon={<MdEmail />} text="contact@getuct.com" />
              </div>
            </div>
          </div>
          <div className={styles.container_logo}>
            <img src={logo.src} alt="" className={styles.logo} />
          </div>
        </div>

        <div className={styles.divider}></div>
        <div className={styles.location}>LONDON DUBAI MUMBAI CHENNAI</div>
      </div>
    </div>
  );
}
