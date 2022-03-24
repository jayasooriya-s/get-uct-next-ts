import React, { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "/public/logo.png";
import MenuIcon from "../MenuIcon/MenuIcon";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(true);
  function renderIcon(): any {
    if (isMobileMenuOpened) {
      return (
        <AiOutlineClose
          className={styles.closeIcon}
          onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
        />
      );
    } else {
      return (
        <MenuIcon
          handleClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
        />
      );
    }
  }
  return (
    <div className={styles.navBar}>
      <div className={styles.icon}>{renderIcon()}</div>
      <img src={logo.src} alt="" className={styles.logo} />
      <ul className={isMobileMenuOpened ? styles.ul_visible : styles.ul_hide}>
        <li className={styles.nav_li}>Home</li>
        <li className={styles.nav_li}>Background</li>
        <li className={styles.nav_li}>Our Approach</li>
        <li className={styles.nav_li}>Capabilities</li>
        <li className={styles.nav_li}>Portfolio</li>
        <li className={styles.nav_li}>Market Ecosystem</li>
        <li className={styles.nav_li}>Value Dimension</li>
        <li className={styles.nav_li}>Contact</li>
      </ul>
    </div>
  );
}
