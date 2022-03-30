/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "/public/logo.png";
import MenuIcon from "../MenuIcon/MenuIcon";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
export default function NavBar() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
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
        <li className={styles.nav_li}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={styles.nav_li}>
          <Link href={"/Background"}>Background</Link>
        </li>
        <li className={styles.nav_li}>
          <Link href={"/OurApproach"}>Our Approach</Link>
        </li>
        <li className={styles.nav_li}>
          <Link href={"/capabilities"}>Capabilities</Link>
        </li>

        <li className={styles.nav_li}>Portfolio</li>
        <li className={styles.nav_li}>
          <Link href={"/market-ecosystem"}>Market Ecosystem</Link>
        </li>

        <li className={styles.nav_li}>
          <Link href={"/value-dimension"}>Value Dimension</Link>
        </li>

        <li className={styles.nav_li}>Contact</li>
        {/* <li className={styles.nav_li}>
          <TextWithBar></TextWithBar>
        </li> */}
      </ul>
    </div>
  );
}
