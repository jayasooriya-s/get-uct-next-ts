import React from "react";
import { RiSoundcloudLine } from "react-icons/ri";
import Footer from "../../components/Footer/Footer";
import HomeFirstBanner from "../../components/HomeFirstBanner/TopBanner";
import ImageIconRow from "../../components/ImageIconRow/ImageIconRow";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Background.module.css";

export default function Background() {
  return (
    <div>
      <NavBar></NavBar>
      <HomeFirstBanner backgroundImage="https://getuct.com/wp-content/uploads/2021/06/pexels-photo-830891-scaled.jpeg" />
      <ImageIconRow
        imgUrl={
          "https://getuct.com/wp-content/uploads/2021/06/marketplace2.png"
        }
        icon={<RiSoundcloudLine />}
        description={
          <>
            <p>
              Have built marketplace that handles millions of transactions every
              month running into multi million dollars of values
            </p>
            <p>
              Have built the necessary technology infrastructure that handles
              transactions of the above scale
            </p>
            <p>
              Have built support infrastructure that facilitates operations
              enabling such scale of volumes in transactions & currency
            </p>
            <p>
              Have manoeuvered the necessary challenges that one encounters on
              the growth path of such scales and established processes,
              technology & server upgrades to evolve further.
            </p>
            <p>
              Last but not least, having our marketplaces valued at 100 million
              dollars worth in the eyes of valuation perspectives of investors
              have been built into our strategy & technology.
            </p>
            <p>
              Hence we help conceive, consult, build, operate and deliver
              digital marketplaces that achieve exponential growth.
            </p>
          </>
        }
      />
      <Footer></Footer>
    </div>
  );
}
