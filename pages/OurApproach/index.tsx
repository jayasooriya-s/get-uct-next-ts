import React from "react";
import { RiSoundcloudLine } from "react-icons/ri";
import { ImageIconRow, TopBanner } from "../../components/index";
import styles from "../OurApproach/OurApproach.module.css";

export default function OurApproach() {
  return (
    <div>
      <TopBanner backgroundImage="https://getuct.com/wp-content/uploads/2021/06/2.png" />
      <div className={styles.imageAndRow}>
        <ImageIconRow
          imgUrl={
            "https://getuct.com/wp-content/uploads/2021/06/We-build-to-drive-Equity-Value.jpg"
          }
          icon={<RiSoundcloudLine />}
          isImageFirst={false}
          title="We build to drive equity value"
          description={
            <>
              <p>
                We start by understanding the areas in which our clients or
                associations or industry vertical companies have capabilities to
                serve the customers’ unmet needs.
              </p>
              <p>
                We explore the opportunity to partner with others in the
                discovered ecosystem to collaboratively serve them.
              </p>
              <p>
                We ensure technology & process models in place which does not
                dilute the identity of the members engaged at the same time
                leverage each other’s strengths for exponential value
                realization.
              </p>
              <p>
                Thus we enable the ecosystem’s marketers to function effectively
                infusion.
              </p>
              <h4>Our domain wealth & tech wealth</h4>
              <p>
                We are good at weaving the data with the model to impress the
                participating members of the ecosystem to be inclined to embrace
                collaborative economy prosperity.
              </p>
              <h4>
                We secure ourselves not just with cyber intelligence but with
                TRUST
              </h4>
              <p>
                Our technology is built with a structure that systematically
                builds trust by protecting customer data from both external
                cyber threats and unethical internal data misuse.
              </p>
              <p>
                Great marketplaces do not simply aggregate a market, they
                enhance it. They leverage the connective tissue to offer the
                consumer a user experience that simply was not possible before
                the arrival of this new intermediary.
              </p>
              <h4>
                It has to be innovative, our unique proposition is innovation to
                your concept to make it survive, thrive & flourish
              </h4>
            </>
          }
        />
      </div>
    </div>
  );
}
