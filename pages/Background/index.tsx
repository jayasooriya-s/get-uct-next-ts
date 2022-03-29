import React from "react";
import Footer from "../../components/Footer/Footer";
import HomeFirstBanner from "../../components/HomeFirstBanner/TopBanner";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Background.module.css";

export default function Background() {
  return (
    <div>
      <NavBar></NavBar>

      <HomeFirstBanner backgroundImage="https://getuct.com/wp-content/uploads/2021/06/pexels-photo-830891-scaled.jpeg" />

      <Footer></Footer>
    </div>
  );
}
