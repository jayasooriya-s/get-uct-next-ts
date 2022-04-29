import React, { useEffect, useState } from "react";
import {
  IoPeopleOutline,
  IoReceiptOutline,
  IoUmbrellaOutline,
} from "react-icons/io5";

import {
  ImageIconRow,
  ImageWithBottomIconTitle,
  TopBanner,
} from "../../components";
import { domain } from "../../config";

import styles from "./Capabilities.module.css";

export default function Capabilities() {
  const [apiData, setApiData] = useState<ICapabilities>({
    topBanner: { bigTitle: "" },
    imageAndDescription: [
      {
        description: "",
        icon: "",
        image: "iiiii",
        isImageFirst: false,
        title: "",
      },
    ],
  });
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await fetch(
        `${domain}/api/capabilitie?populate[topBanner][populate]=*&populate[imageAndDescription][populate]=*`
      );
      let _apiData = await response.json();

      // console.log(_apiData);
      let _topBanner = {
        bigTitle: _apiData.data.attributes.topBanner.bigTitle,
        smallTitle: _apiData.data.attributes.topBanner.smallTitle,
        image: `${domain}${_apiData.data.attributes.topBanner.image.data.attributes.url}`,
      };
      // console.log(` top banner${_topBanner.image}`);
      let _imageAndDescriptionList: IImageAndDescription[] = [];
      _apiData.data.attributes.imageAndDescription.map &&
        _apiData.data.attributes.imageAndDescription.map((i: any) => {
          let _item: ImageAndDescriptionModel = new ImageAndDescriptionModel({
            title: i.title ?? "",
            description: i.description ?? "",
            isImageFirst: i.isImageFirst ?? false,
            image: `${domain}${i.image.data.attributes.url ?? ""}`,
            icon: `${domain}${i.icon.data.attributes.url ?? ""}`,
          });
          _imageAndDescriptionList.push(_item);
        });

      setApiData({
        topBanner: _topBanner,
        imageAndDescription: _imageAndDescriptionList,
      });
    } catch (e: any) {
      console.log(`🔥${e.message}🔥`);
    }
  };
  return (
    <div>
      <TopBanner backgroundImage="https://getuct.com/wp-content/uploads/2021/06/5-e1623077439538.png" />
      <div>
        {apiData.imageAndDescription.map((i, index) => {
          return (
            <div key={index} className={styles.imageAndRow}>
              <ImageIconRow
                key={i.title ?? ""}
                title={i.title ?? ""}
                description={
                  <div
                    dangerouslySetInnerHTML={{
                      __html: i.description ?? "",
                    }}
                  ></div>
                }
                imgUrl={i.image ?? ""}
                isImageFirst={i.isImageFirst ?? false}
                icon={
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={i.icon} alt="" className={styles.icon}></img>
                }
              />
            </div>
          );
        })}
      </div>

      {marketEcosystem()}
    </div>
  );
}

function marketEcosystem() {
  return (
    <div className={styles.ecosystemsColumn}>
      <div className={styles.ecosystemsTitle}>Marketplace ecosystem</div>
      <div className={styles.ecosystemsRow}>
        <ImageWithBottomIconTitle
          title={"Market ecosystem platforms"}
          icon={<IoPeopleOutline />}
          imgUrl={
            "https://getuct.com/wp-content/uploads/2019/10/inner_card_14.jpg"
          }
        />
        <ImageWithBottomIconTitle
          title={"Fusion"}
          icon={<IoUmbrellaOutline />}
          imgUrl={
            "https://getuct.com/wp-content/uploads/2019/10/inner_card_15.jpg"
          }
        />
        <ImageWithBottomIconTitle
          title={"We curate"}
          icon={<IoReceiptOutline />}
          imgUrl={
            "https://getuct.com/wp-content/uploads/2019/10/inner_card_16.jpg"
          }
        />
      </div>
    </div>
  );
}

interface ICapabilities {
  topBanner?: ITopBanner;
  imageAndDescription: IImageAndDescription[];
}

interface ITopBanner {
  smallTitle?: string;
  bigTitle?: string;
  image?: string;
}
interface IImageAndDescription {
  title?: string;
  description?: string;
  image?: string;
  isImageFirst?: Boolean;
  icon?: string;
}

class ImageAndDescriptionModel {
  title: string;
  description: string;
  image: string;
  isImageFirst: Boolean;
  icon: string;

  constructor({
    icon: icon,
    description: description,
    image: image,
    isImageFirst: isImageFirst,
    title: title,
  }: IImageAndDescription) {
    this.icon = icon ?? "";
    this.description = description ?? "";
    this.image = image ?? "";
    this.isImageFirst = isImageFirst ?? false;
    this.title = title ?? "";
  }
}
