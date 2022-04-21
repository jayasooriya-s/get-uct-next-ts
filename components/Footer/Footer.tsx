import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import IconAndText from "../IconAndText/IconAndText";
import logo from "/public/logo.png";
import bg from "../../public/footer.avif";
import { domain } from "../../config";

export default function Footer() {
  const [footerItem, setFooterItems] = useState<IFooterItems>();
  const [logoData, setLogo] = useState<string>();
  useEffect(() => {
    fetchPortfolio();
  }, []);

  function backToTop() {
    window.scrollTo(0, 0);
  }
  const fetchPortfolio = async () => {
    try {
      const response = await fetch(
        `${domain}/api/footer?populate=backgroundImage`
      );
      const jsonData = await response.json();
      setFooterItems({
        address: jsonData.data.attributes.address,
        contactEmail: jsonData.data.attributes.contactEmail,
        locations: jsonData.data.attributes.locations,
        bg: `${domain}${jsonData.data.attributes.backgroundImage.data.attributes.formats.large.url}`,
      });
      const logoResponse = await fetch(`${domain}/api/logo?populate=logo`);
      const jsonDataLogo = await response.json();
      setLogo(
        `${domain}${jsonDataLogo.data.attributes.logo.data.attributes.url}`
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${footerItem?.bg ?? bg.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.margin}>
        <div className={styles.container_info_logo}>
          <div className={styles.container_info_center}>
            <div className={styles.container_info}>
              <div className={styles.info}>
                <IconAndText
                  icon={<FaHome />}
                  text={
                    footerItem?.address ??
                    "724 Tamani Arts, Business Bay, Dubai"
                  }
                />
                <IconAndText
                  icon={<MdEmail />}
                  text={footerItem?.contactEmail ?? "contact@getuct.com"}
                />
              </div>
            </div>
          </div>
          <div className={styles.container_logo}>
            <img src={logoData ?? logo.src} alt="" className={styles.logo} />
          </div>
        </div>

        <div className={styles.divider}></div>
        <div className={styles.location}>
          {footerItem?.locations ?? "LONDON DUBAI MUMBAI CHENNAI"}
        </div>
      </div>
    </div>
  );
}

interface IFooterItems {
  address: string;
  locations: string;
  contactEmail: string;
  bg: string;
}
