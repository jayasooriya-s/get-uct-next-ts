/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "/public/logo.png";
import MenuIcon from "../MenuIcon/MenuIcon";
import { AiOutlineClose } from "react-icons/ai";
import LinkWithEvent from "./LinkWithEvent";
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
  function onPageChange() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  return (
    <div className={styles.navBar}>
      <div className={styles.icon}>{renderIcon()}</div>
      <img src={logo.src} alt="" className={styles.logo} />
      <ul className={isMobileMenuOpened ? styles.ul_visible : styles.ul_hide}>
        <li className={styles.nav_li} onClick={onPageChange}>
          <LinkWithEvent href={"/"} title={"Home"} onClick={onPageChange} />
        </li>
        <li className={styles.nav_li} onClick={onPageChange}>
          <LinkWithEvent
            href={"/Background"}
            title={"Background"}
            onClick={onPageChange}
          />
        </li>
        <li className={styles.nav_li} onClick={onPageChange}>
          <LinkWithEvent
            href={"/OurApproach"}
            title={"Our Approach"}
            onClick={onPageChange}
          />
        </li>
        <li className={styles.nav_li} onClick={onPageChange}>
          <LinkWithEvent
            href={"/capabilities"}
            title={"Capabilities"}
            onClick={onPageChange}
          />
        </li>
        <li className={styles.nav_li}>
          <LinkWithEvent
            href={"/portfolio"}
            title={"Portfolio"}
            onClick={onPageChange}
          />
        </li>
        <li className={styles.nav_li}>
          <LinkWithEvent
            href={"/market-ecosystem"}
            title={"Market Ecosystem"}
            onClick={onPageChange}
          />
        </li>
        <li className={styles.nav_li} onClick={onPageChange}>
          <LinkWithEvent
            href={"/value-dimension"}
            title={"Value Dimension"}
            onClick={onPageChange}
          />
        </li>
        <li className={styles.nav_li}>
          <LinkWithEvent
            href="/about-us/contact"
            title={"Contact"}
            onClick={onPageChange}
          />
        </li>
      </ul>
    </div>
  );
}
