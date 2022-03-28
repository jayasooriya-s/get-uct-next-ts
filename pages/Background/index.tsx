import React from "react";
import Footer from "../../components/Footer/Footer";
import HomeFirstBanner from "../../components/HomeFirstBanner/HomeFirstBanner";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Background.module.css";

export default function Background() {
  return (
    <div>
      <NavBar></NavBar>
      <div className={styles.height}>
        <HomeFirstBanner />
      </div>
      <Footer></Footer>
    </div>
  );
}
