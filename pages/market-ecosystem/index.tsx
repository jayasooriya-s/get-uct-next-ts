/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { domain } from "../../config";
import styles from "./MarketEcosystem.module.css";

export default function MarketEcosystem() {
  const [image, setImage] = useState("");
  var imageMobile: string = "";
  var imageWeb: string = "";
  useEffect(() => {
    fetchApi();
    window.addEventListener("resize", readWidth);
  }, []);
  const readWidth = () => {
    const scrolled = document.documentElement.clientWidth;
    console.log(scrolled);
    if (scrolled > 1200) {
      setImage(imageWeb);
    } else if (scrolled <= 1200) {
      setImage(imageMobile);
    }
  };

  async function loadImage() {
    console.log();
    if (window.innerWidth > 1200) {
      setImage(imageWeb);
    } else if (window.innerWidth <= 1200) {
      setImage(imageMobile);
    }
  }

  const fetchApi = async () => {
    try {
      const response = await fetch(`${domain}/api/market-ecosystem?populate=*`);
      if (response.status == 200) {
        let _apiData = await response.json();
        imageMobile = `${domain}${_apiData.data.attributes.imageMobile.data.attributes.url}`;
        imageWeb = `${domain}${_apiData.data.attributes.imageWeb.data.attributes.url}`;
        loadImage();
      }
    } catch (e: any) {
      console.log(`🔥${e.message}🔥`);
    }
  };
  return (
    <div className={styles.imageContainer}>
      <img src={image} alt="" />
    </div>
  );
}
