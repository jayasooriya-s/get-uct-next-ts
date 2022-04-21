import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { BsGraphUp } from "react-icons/bs";
import { RiHandCoinLine, RiSuitcaseLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { BiNotepad } from "react-icons/bi";
import homeBanner from "../public/home/home-banner-top.avif";
import consult from "../public/home/consult.avif";
import strategy from "../public/home/strategy.avif";
import technology from "../public/home/technology.avif";
import call from "../public/home/call.avif";
import contact from "../public/home/contact.avif";
import {
  EnquiryForm,
  ImageIconRow,
  ImageWithBottomIconTitle,
  TopBanner,
} from "../components";
import { useEffect, useState } from "react";
import { domain } from "../config";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState<IHomeScreen>({
    topBanner: { bigTitle: "" },
  });
  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${domain}/api/home-screens?populate[topBanner][populate]=*&populate[firstImageAndDescription][populate]=*&populate[secondImageAndDescription][populate]=*`
      );
      const dataList = await response.json();
      setApiData({
        topBanner: {
          smallTitle: dataList.data[0].attributes.topBanner.smallTitle ?? "",
          bigTitle: dataList.data[0].attributes.topBanner.bigTitle,
          image: `${domain}${dataList.data[0].attributes.topBanner.image.data.attributes.formats.large.url}`,
        },
        imageAndDescriptionFirst: {
          title: dataList.data[0].attributes.firstImageAndDescription.title,
          description:
            dataList.data[0].attributes.firstImageAndDescription.description,
          isImageFirst:
            dataList.data[0].attributes.firstImageAndDescription.isImageFirst,
          image: `${domain}${dataList.data[0].attributes.firstImageAndDescription.image.data.attributes.formats.large.url}`,
        },
        imageAndDescriptionSecond: {
          title: dataList.data[0].attributes.secondImageAndDescription.title,
          description:
            dataList.data[0].attributes.secondImageAndDescription.description,
          isImageFirst:
            dataList.data[0].attributes.secondImageAndDescription.isImageFirst,
          image: `${domain}${dataList.data[0].attributes.secondImageAndDescription.image.data.attributes.formats.large.url}`,
        },
      });

      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(true);
    }
  };
  return (
    <div>
      <TopBanner
        backgroundImage={apiData.topBanner!.image ?? homeBanner.src}
        title={apiData.topBanner!.smallTitle ?? "MARKETPLACE SPECIALISTS "}
        titleBig={apiData.topBanner!.bigTitle ?? "MOMENTUM IS INCREASING"}
      />
      <div className={styles.imageAndRow}>
        <ImageIconRow
          title={apiData.imageAndDescriptionFirst?.title ?? "OUR MISSION"}
          icon={<BsGraphUp />}
          isImageFirst={apiData.imageAndDescriptionFirst?.isImageFirst}
          imgUrl={
            apiData.imageAndDescriptionFirst?.image ??
            "https://getuct.com/wp-content/uploads/2021/06/5-1.png"
          }
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: apiData.imageAndDescriptionFirst?.description ?? "",
              }}
            ></div>
          }
        />
      </div>
      <div className={styles.imageAndRow}>
        <ImageIconRow
          title={
            apiData.imageAndDescriptionSecond?.title ??
            "CONSULTING, DEVELOPMENT AND SUPPORT EXPERTISE"
          }
          icon={<RiHandCoinLine />}
          imgUrl={apiData.imageAndDescriptionSecond?.image ?? consult.src}
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: apiData.imageAndDescriptionSecond?.description ?? "",
              }}
            ></div>
          }
          isImageFirst={apiData.imageAndDescriptionSecond?.isImageFirst}
        />
      </div>

      {marketEcosystem()}
      <div className={styles.descriptionAndImage}>
        <div
          className={styles.rowImage}
          style={{
            backgroundImage: `url(${contact.src})`,
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
            imgUrl={strategy.src}
          />
          <ImageWithBottomIconTitle
            title={"Technology consulting & development"}
            icon={<GiMoneyStack />}
            imgUrl={technology.src}
          />
          <ImageWithBottomIconTitle
            title={"Call center & market support enablement"}
            icon={<BiNotepad />}
            imgUrl={call.src}
          />
        </div>
      </div>
    );
  }
};

export default Home;

interface IHomeScreen {
  topBanner?: ITopBanner;
  imageAndDescriptionFirst?: IImageAndDescription;
  imageAndDescriptionSecond?: IImageAndDescription;
}

interface ITopBanner {
  smallTitle?: string;
  bigTitle?: string;
  image?: string;
}
interface IImageAndDescription {
  title: string;
  description: string;
  image: string;
  isImageFirst: Boolean;
}
