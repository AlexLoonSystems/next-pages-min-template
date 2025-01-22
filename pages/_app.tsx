import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import "../styles/global.css";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Loon Systems</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
