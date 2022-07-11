import { InferGetStaticPropsType } from "next";
import React from "react";
import { domain } from "../config";

export default function TestPage({
  name,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  console.log(name);
  console.log("testpage running");
  return <div style={{ height: "200px", color: "white" }}>TestPage</div>;
}

export async function getServerSideProps() {
  var data = fetchPortfolio();
  return {
    props: {
      name: data,
    }, // will be passed to the page component as props
  };
}

async function fetchPortfolio() {
  try {
    const response = await fetch(
      `${domain}/api/portfolios?populate=icon,image&fields=name`
    );
    console.log(response.body);
    const dataList = await response.json();
    var _portList: [] = [];
    // console.log(dataList);

    //   dataList.data.map &&
    //     dataList.data.map((i: any) => {
    //       let _listItem = new PortfolioModel({
    //         title: i.attributes.name ?? "",
    //         icon: domain + i.attributes.icon.data.attributes.url,

    //         imageMobile:
    //           domain + i.attributes.image.data.attributes.formats.large.url,
    //         imageWeb: domain + i.attributes.image.data.attributes.url,
    //       });

    //     });
    return response.body;
  } catch (e) {
    console.log(e);
  }
}
