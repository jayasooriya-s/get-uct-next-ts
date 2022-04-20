/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { PortFolioCard } from "../../components";
import styles from "./Portfolio.module.css";
import { portfolioList } from "../../repository/PortfolioData";
import { Portfolio as PortfolioModel } from "../../models/PortfolioModel";
import { AiOutlineArrowUp } from "react-icons/ai";
import { domain } from "../../config";
import LoadingOverlay from "react-loading-overlay-ts";
import BounceLoader from "react-spinners/BounceLoader";
function Portfolio() {
  // const [portfolio, setPortfolio] = useState<PortfolioModel>();
  const [isLoading, setIsLoading] = useState(true);
  var [portfolioDataList, setPortfolioDataList] = useState<
    PortfolioModel[] | []
  >([]);

  function renderImage(image: PortfolioModel) {
    let el = document.getElementById(image.title ?? "");
    // setPortfolio(image);
    console.log(el?.getBoundingClientRect());
    let x = el?.getBoundingClientRect().x ?? 0;
    let y = el?.getBoundingClientRect().y ?? 0;
    window.scrollTo(0, y);
  }

  useEffect(() => {
    fetchPortfolio();
  }, []);

  function backToTop() {
    window.scrollTo(0, 0);
  }
  const fetchPortfolio = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${domain}/api/portfolios?populate=icon,image&fields=name`
      );
      const dataList = await response.json();
      var _portList: PortfolioModel[] = [];

      dataList.data.map &&
        dataList.data.map((i: any) => {
          let _listItem = new PortfolioModel({
            title: i.attributes.name ?? "",
            icon: domain + i.attributes.icon.data.attributes.url,

            imageMobile:
              domain + i.attributes.image.data.attributes.formats.large.url,
            imageWeb: domain + i.attributes.image.data.attributes.url,
          });
          _portList.push(_listItem);
        });
      setPortfolioDataList(_portList);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(true);
    }
  };

  return isLoading ? (
    <LoadingOverlay active={false} spinner={<BounceLoader />}>
      <div className={styles.body}>
        <div className={styles.center}>
          <div className={styles.grid}>
            {portfolioList.map((item, i) => (
              <PortFolioCard
                key={i}
                icon={item.icon ?? ""}
                title={item.title}
                onClick={() => renderImage(item)}
              />
            ))}
          </div>
        </div>

        <div>
          {portfolioList.map((item, i) => (
            // eslint-disable-next-line react/jsx-key
            <div>
              <div id={item?.title} className={styles.title}>
                {item?.title}
              </div>
              <div className={styles.image_container}>
                <img
                  src={item?.imageWeb ?? "https://getuct.com/images/Queue.jpg"}
                  alt=""
                  className={styles.pdf_image}
                ></img>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.back_to_top}>
          <AiOutlineArrowUp className={styles.arrow} onClick={backToTop} />
        </div>
      </div>{" "}
    </LoadingOverlay>
  ) : (
    <div className={styles.body}>
      <div className={styles.center}>
        <div className={styles.grid}>
          {portfolioDataList.map((item, i) => (
            <PortFolioCard
              key={i}
              icon={item.icon ?? ""}
              title={item.title}
              onClick={() => renderImage(item)}
            />
          ))}
        </div>
      </div>

      <div>
        {portfolioDataList.map((item, i) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <div id={item?.title} className={styles.title}>
              {item?.title}
            </div>
            <div className={styles.image_container}>
              <img
                src={item?.imageWeb ?? "https://getuct.com/images/Queue.jpg"}
                alt=""
                className={styles.pdf_image}
              ></img>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.back_to_top}>
        <AiOutlineArrowUp className={styles.arrow} onClick={backToTop} />
      </div>
    </div>
  );
}

export default Portfolio;
