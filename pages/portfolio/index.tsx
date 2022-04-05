/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { PortFolioCard } from "../../components";
import styles from "./Portfolio.module.css";
import { portfolioList } from "../../repository/PortfolioData";
import { Portfolio as PortfolioModel } from "../../models/PortfolioModel";
function Portfolio() {
  const [portfolio, setPortfolio] = useState<PortfolioModel>();

  function renderImage(image: PortfolioModel) {
    let el = document.getElementById("img");
    setPortfolio(image);
    console.log(el?.getBoundingClientRect());
    let x = el?.getBoundingClientRect().x ?? 0;
    let y = el?.getBoundingClientRect().y ?? 0;
    window.scrollTo(0, y);
  }

  return (
    <div className={styles.body}>
      <div className={styles.center}>
        <div className={styles.grid}>
          {portfolioList.map((item, i) => (
            // eslint-disable-next-line react/jsx-key
            <PortFolioCard
              key={i}
              icon={item.icon ?? ""}
              title={item.title}
              onClick={() => renderImage(item)}
            />
          ))}
        </div>
      </div>
      <div className={styles.title}>{portfolio?.title}</div>
      {portfolio != undefined ? (
        <div className={styles.image_container}>
          <img
            id="img"
            src={portfolio?.imageWeb ?? "https://getuct.com/images/Queue.jpg"}
            alt=""
            className={styles.pdf_image}
          ></img>
        </div>
      ) : null}
    </div>
  );
}

export default Portfolio;
