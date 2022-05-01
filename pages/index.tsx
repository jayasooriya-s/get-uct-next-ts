import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { BsGraphUp } from "react-icons/bs";
import { RiHandCoinLine } from "react-icons/ri";
import homeBanner from "../public/home/home-banner-top.avif";
import consult from "../public/home/consult.avif";
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
  const [apiData, setApiData] = useState<IHomeScreen>({
    topBanner: { bigTitle: "" },
  });
  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
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
    } catch (e) {
      console.log(e);
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

      {MarketEcosystem()}
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

function MarketEcosystem() {
  const [apiData, setApiData] = useState<IMarketEcosystem[]>();
  const [title, setTitle] = useState("Marketplace ecosystem");
  useEffect(() => {
    fetchMarketEcosystem();
  }, []);
  const fetchMarketEcosystem = async () => {
    try {
      const response = await fetch(
        `${domain}/api/market-ecosystem-home?populate[options][populate]=*`
      );
      if (response.status == 200) {
        const dataList = await response.json();
        setTitle(dataList.data.attributes.title);
        let _list: IMarketEcosystem[] = [];
        dataList.data.attributes.options.map &&
          dataList.data.attributes.options.map((i: any) => {
            _list.push({
              background: `${domain + i.backgroundImage.data.attributes.url}`,
              icon: `${
                i.icon.data != null ? domain + i.icon.data.attributes.url : ""
              }`,
              title: i.title,
            });
          });
        setApiData(_list);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styles.ecosystemsColumn}>
      <div className={styles.ecosystemsTitle}>{title}</div>
      <div className={styles.ecosystemsRow}>
        {apiData?.map((i, index) => {
          return (
            <ImageWithBottomIconTitle
              // eslint-disable-next-line @next/next/no-img-element
              icon={<img src={i.icon} alt=""></img>}
              imgUrl={i.background}
              title={i.title}
              key={`${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}
interface IMarketEcosystem {
  title: string;
  icon: string;
  background: string;
}
