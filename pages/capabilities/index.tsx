import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
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
import styles from "./Capabilities.module.css";

export default function capabilities() {
  return (
    <div>
      <TopBanner backgroundImage="https://getuct.com/wp-content/uploads/2021/06/5-e1623077439538.png" />
      <div className={styles.imageAndRow}>
        <ImageIconRow
          imgUrl={"https://getuct.com/wp-content/uploads/2021/06/3-1.png"}
          icon={<BsGraphUp />}
          isImageFirst={true}
          description={
            <>
              <p>
                The emergence & competitive nature of cloud infrastructure and
                convergence technologies has led to a huge number of interactive
                platforms that have brought once- disparate industries together
                to solve customer needs holistically.
              </p>
              <p>
                Second, coherence to access external resources through the
                technology-led functions are able to leverage cross-industry
                supplies accessible to companies. Traditional boundaries between
                industries are disappearing, signalling a great fusion in
                serving the needs of the customers in transition from
                marketplace to market ecosystems.
              </p>
              <p>
                Indeed, there is a seismic shift underway in how businesses
                operate—and they are forced to look at how they perceive
                themselves. Many of the successful businesses in today’s market
                evolutions are taking an unconstrained view of how they serve
                customers and are open to embracing the change in their
                traditional industry silos.
              </p>
              <p>
                This typically includes engaging with new partners in the
                ecosystem, sharing data with many of these partners, and working
                with different types of ecosystem partners to acquire more
                customers.
              </p>
            </>
          }
        />
      </div>
      <div className={styles.imageAndRow}>
        <ImageIconRow
          title={"We balance"}
          imgUrl={
            "https://getuct.com/wp-content/uploads/2021/06/We-Balance.jpg"
          }
          icon={<FaBalanceScale />}
          isImageFirst={false}
          description={
            <>
              <p>
                We take into account the customer’s attention for relevance, not
                personalization.
              </p>
              <p>
                Digital marketplaces offer their customers a number of
                promotions, especially free products, discounts, or personalized
                and relevant services. Though many of these offerings are meant
                to be relevant, they can feel invasive.
              </p>
              <p>
                By focusing on relevance, rather than personalization, our
                offerings can be more helpful than invasive things like
                providing an umbrella on a rainy day than just selling an
                umbrella as he walks outside more every day.
              </p>
            </>
          }
        />
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
