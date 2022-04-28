import React, { useEffect, useState } from "react";
import { TiFlowMerge } from "react-icons/ti";
import { ImageIconRow, TopBanner } from "../../components";
import { domain } from "../../config";
import styles from "./ValueDimension.module.css";

export default function ValueDimension() {
  const [apiData, setApiData] = useState<IValueDimension>({
    topBanner: { bigTitle: "" },
  });
  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await fetch(
        `${domain}/api/value-dimension?populate[topBanner][populate]=*&populate[imageAndDescription][populate]=*`
      );
      if (response.status == 200) {
        let _apiData = await response.json();

        setApiData({
          topBanner: {
            bigTitle: _apiData.data.attributes.topBanner.bigTitle,
            smallTitle: _apiData.data.attributes.topBanner.smallTitle,
            image: `${domain}${_apiData.data.attributes.topBanner.image.data.attributes.url}`,
          },
          imageAndDescription: {
            title: _apiData.data.attributes.imageAndDescription.title,
            description:
              _apiData.data.attributes.imageAndDescription.description,
            isImageFirst: _apiData.data.attributes.imageAndDescription.title,
            image: `${domain}${_apiData.data.attributes.imageAndDescription.image.data.attributes.url}`,
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <TopBanner
        backgroundImage={
          apiData.topBanner?.image ??
          "https://getuct.com/wp-content/uploads/2021/06/1.png"
        }
        title={apiData.topBanner?.smallTitle}
        titleBig={apiData.topBanner?.bigTitle}
      />
      <div className={styles.imageAndRow}>
        <ImageIconRow
          imgUrl={
            apiData.imageAndDescription?.image ??
            "https://getuct.com/wp-content/uploads/2021/06/equity.jpg"
          }
          icon={<TiFlowMerge />}
          isImageFirst={apiData.imageAndDescription?.isImageFirst}
          title={apiData.imageAndDescription?.title}
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

interface IValueDimension {
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
