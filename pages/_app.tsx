import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/index";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Universal Code technology</title>
        <meta
          name="description"
          content="Our marketplace ecosystem enables natural pull on both the consumer and supplier side of the market. Both consumers and suppliers should sense an increasing importance of your online marketplace in the world."
        />
      </Head>
      <Layout page={<Component {...pageProps} />}></Layout>{" "}
    </>
  );
}

export default MyApp;
