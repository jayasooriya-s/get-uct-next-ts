import React, { useEffect, useState } from "react";
import { RiSoundcloudLine } from "react-icons/ri";
import { ImageIconRow, TopBanner } from "../../components";
import { domain } from "../../config";
import styles from "./Background.module.css";

export default function Background() {
  const [apiData, setApiData] = useState<IBackGroundScreen>({
    topBanner: { bigTitle: "" },
  });
  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await fetch(
        `${domain}/api/back-ground-screen?populate[topBanner][populate]=*&populate[imageAndDescription][populate]=*`
      );
      let _apiData = await response.json();
      setApiData({
        topBanner: {
          bigTitle: _apiData.data.attributes.topBanner.bigTitle,
          smallTitle: _apiData.data.attributes.topBanner.smallTitle,
          image: `${domain}${_apiData.data.attributes.topBanner.image.data.attributes.url}`,
        },
        imageAndDescription: {
          title: _apiData.data.attributes.imageAndDescription.title,
          description: _apiData.data.attributes.imageAndDescription.description,
          isImageFirst: _apiData.data.attributes.imageAndDescription.title,
          image: `${domain}${_apiData.data.attributes.imageAndDescription.image.data.attributes.url}`,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <TopBanner
        backgroundImage={
          apiData.topBanner?.image ??
          "https://getuct.com/wp-content/uploads/2021/06/pexels-photo-830891-scaled.jpeg"
        }
        title={apiData.topBanner?.smallTitle}
        titleBig={apiData.topBanner?.bigTitle}
      />
      <div className={styles.imageAndRow}>
        <ImageIconRow
          imgUrl={
            apiData.imageAndDescription?.image ??
            "https://getuct.com/wp-content/uploads/2021/06/marketplace2.png"
          }
          title={apiData.imageAndDescription?.title}
          icon={<RiSoundcloudLine />}
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: apiData.imageAndDescription?.description ?? "",
              }}
            ></div>
          }
          isImageFirst={apiData.imageAndDescription?.isImageFirst}
        />
      </div>
    </div>
  );
}

interface IBackGroundScreen {
  topBanner?: ITopBanner;
  imageAndDescription?: IImageAndDescription;
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
