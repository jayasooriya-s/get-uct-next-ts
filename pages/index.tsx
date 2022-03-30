import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { BsGraphUp } from "react-icons/bs";
import { RiHandCoinLine, RiSuitcaseLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { BiNotepad } from "react-icons/bi";
import {
  EnquiryForm,
  ImageIconRow,
  ImageWithBottomIconTitle,
  TopBanner,
} from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <TopBanner
        backgroundImage="https://getuct.com/wp-content/uploads/2021/05/Untitled-design-9.png"
        title="MARKETPLACE SPECIALISTS"
        titleBig="MOMENTUM IS INCREASING"
      />
      <div className={styles.imageAndRow}>
        <ImageIconRow
          title={"OUR MISSION"}
          icon={<BsGraphUp />}
          imgUrl={"https://getuct.com/wp-content/uploads/2021/06/5-1.png"}
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
      </div>
      <div className={styles.imageAndRow}>
        <ImageIconRow
          title={"CONSULTING, DEVELOPMENT AND SUPPORT EXPERTISE"}
          icon={<RiHandCoinLine />}
          imgUrl="https://getuct.com/wp-content/uploads/2021/06/4-1.png"
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
          isImageFirst={false}
        />
      </div>

      {marketEcosystem()}
      <div className={styles.descriptionAndImage}>
        <div
          className={styles.rowImage}
          style={{
            backgroundImage: `url("https://getuct.com/wp-content/uploads/2021/06/REQUEST-A-FREE-CALL-BACK.jpg")`,
          }}
        ></div>
        <div className={styles.enquiryForm}>
          <EnquiryForm />
        </div>
      </div>
    </div>
  );

  function marketEcosystem() {
    return (
      <div className={styles.ecosystemsColumn}>
        <div className={styles.ecosystemsTitle}>Marketplace ecosystem</div>
        <div className={styles.ecosystemsRow}>
          <ImageWithBottomIconTitle
            title={"Strategy & process consulting"}
            icon={<RiSuitcaseLine />}
            imgUrl={
              "https://getuct.com/wp-content/uploads/2019/10/inner_card_11.jpg"
            }
          />
          <ImageWithBottomIconTitle
            title={"Technology consulting & development"}
            icon={<GiMoneyStack />}
            imgUrl={
              "https://getuct.com/wp-content/uploads/2019/10/inner_card_10.jpg"
            }
          />
          <ImageWithBottomIconTitle
            title={"Call center & market support enablement"}
            icon={<BiNotepad />}
            imgUrl={
              "https://getuct.com/wp-content/uploads/2019/10/inner_card_12.jpg"
            }
          />
        </div>
      </div>
    );
  }
};

export default Home;
