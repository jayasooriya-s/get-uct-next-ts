import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/index";
import { ReactElement } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout page={<Component {...pageProps} />}></Layout>;
}

export default MyApp;
