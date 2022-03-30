import { type } from "os";
import React, { ReactElement } from "react";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

type props = {
  page: ReactElement;
};
export default function Layout(props: props) {
  return (
    <>
      <NavBar />
      <main>{props.page}</main>
      <Footer />
    </>
  );
}
