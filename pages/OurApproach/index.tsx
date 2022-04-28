import React, { useEffect, useState } from "react";
import { RiSoundcloudLine } from "react-icons/ri";
import { ImageIconRow, TopBanner } from "../../components/index";
import { domain } from "../../config";
import styles from "../OurApproach/OurApproach.module.css";

export default function OurApproach() {
  const [apiData, setApiData] = useState<IOurApproach>({
    topBanner: { bigTitle: "" },
  });
  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await fetch(
        `${domain}/api/our-approach?populate[topBanner][populate]=*&populate[imageAndDescription][populate]=*`
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
          "https://getuct.com/wp-content/uploads/2021/06/2.png"
        }
        titleBig={apiData.topBanner?.bigTitle}
        title={apiData.topBanner?.smallTitle}
      />
      <div className={styles.imageAndRow}>
        <ImageIconRow
          imgUrl={
            apiData.imageAndDescription?.image ??
            "https://getuct.com/wp-content/uploads/2021/06/We-build-to-drive-Equity-Value.jpg"
          }
          icon={<RiSoundcloudLine />}
          isImageFirst={apiData.imageAndDescription?.isImageFirst}
          title={
            apiData.imageAndDescription?.title ??
            "We build to drive equity value"
          }
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: apiData.imageAndDescription?.description ?? "",
              }}
            ></div>
          }
        />
      </div>
    </div>
  );
}

interface IOurApproach {
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
