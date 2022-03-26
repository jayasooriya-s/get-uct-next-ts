import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import HomeFirstBanner from "../components/HomeFirstBanner/HomeFirstBanner";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className={styles.height}>
        <HomeFirstBanner />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
