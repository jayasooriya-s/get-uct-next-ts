import React from "react";
import { TiFlowMerge } from "react-icons/ti";
import { ImageIconRow, TopBanner } from "../../components";
import styles from "./ValueDimension.module.css";

export default function ValueDimension() {
  return (
    <div>
      <TopBanner backgroundImage="https://getuct.com/wp-content/uploads/2021/06/1.png" />
      <div className={styles.imageAndRow}>
        <ImageIconRow
          imgUrl={"https://getuct.com/wp-content/uploads/2021/06/equity.jpg"}
          icon={<TiFlowMerge />}
          isImageFirst={false}
          description={
            <>
              <p>
                Aspirations of the marketplace or market ecosystem owners have
                the objective of realizing exponential value accumulation and
                dilution as their exit or focus strategy. Hence it is important
                to understand the perspective of the investors while organizing
                the digital business model and value parameters.
              </p>
              <div className={styles.heading}>
                We have experienced that all markets are not created equal and
                all revenues are not created equal
              </div>
              <p>
                Hence we consider a wider spectrum from a valuation angle as we
                help conceive consult, build, operate and deliver such as
              </p>
              <ul>
                <li>Experience</li>
                <li>Buyer-Supplier Fragmentation</li>
                <li>Supplier Friction</li>
                <li>Economic Moats</li>
                <li>Network Effects</li>
                <li>Churn Rate</li>
                <li>Gross Margins</li>
                <li>Frequency</li>
                <li>Scale</li>
              </ul>
            </>
          }
        />
      </div>
    </div>
  );
}
