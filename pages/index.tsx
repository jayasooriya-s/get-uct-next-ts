import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContainerWithIcon from "../components/ContainerWithLogo/ContainerWithIcon";
import Footer from "../components/Footer/Footer";
import HomeFirstBanner from "../components/HomeFirstBanner/HomeFirstBanner";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.css";
import { BsGraphUp } from "react-icons/bs";
import { RiHandCoinLine } from "react-icons/ri";
const Home: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>

      <HomeFirstBanner />

      <div className={styles.descriptionAndImage}>
        <div
          className={styles.rowImage}
          style={{
            backgroundImage: `url("https://getuct.com/wp-content/uploads/2021/06/5-1.png")`,
          }}
        ></div>
        <ContainerWithIcon
          icon={<BsGraphUp />}
          title="OUR MISSION"
          description={
            <>
              <p>
                Our marketplace ecosystem enables natural pull on both the
                consumer and supplier side of the market. Both consumers and
                suppliers should sense an increasing importance of your online
                marketplace in the world.
              </p>
              <p>
                It should be positioned and designed to acquire the incremental
                consumer as well as the incremental supplier at ease with the
                flow.
              </p>
              <p>
                We ensure that our clients are enabled with top of the line
                technology infrastructure along with the market ecosystem
                operational and call center infrastructures in a dedicated model
                leveraging our collective economies of scale.
              </p>
            </>
          }
        ></ContainerWithIcon>
      </div>

      <div className={styles.descriptionAndImage}>
        <ContainerWithIcon
          icon={<RiHandCoinLine />}
          title="CONSULTING, DEVELOPMENT AND SUPPORT EXPERTISE"
          description={
            <>
              <p>
                Our marketplace ecosystem enables natural pull on both the
                consumer and supplier side of the market. Both consumers and
                suppliers should sense an increasing importance of your online
                marketplace in the world.
              </p>
              <p>
                It should be positioned and designed to acquire the incremental
                consumer as well as the incremental supplier at ease with the
                flow.
              </p>
              <p>
                We ensure that our clients are enabled with top of the line
                technology infrastructure along with the market ecosystem
                operational and call center infrastructures in a dedicated model
                leveraging our collective economies of scale.
              </p>
            </>
          }
        />
        <div
          className={styles.rowImage}
          style={{
            backgroundImage: `url("https://getuct.com/wp-content/uploads/2021/06/4-1.png")`,
          }}
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
