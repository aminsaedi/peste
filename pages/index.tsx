import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "vazirmatn/Vazirmatn-font-face.css";

import Head from "next/head";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppCard from "../components/AppCard";
import { getSortedPostsData } from "../lib/posts";

const theme = createTheme({
  typography: {
    fontFamily: ["Vazirmatn", "sans-serif"].join(","),
  },
  direction: "rtl",
});

export default function Home({ allPostsData }: { allPostsData: any[] }) {
  // document.dir = "rtl";
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Zan Zendegi Azadi</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.000/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        /> */}
      </Head>

      <main style={{ padding: "1rem" }}>
        <Grid
          container
          alignItems="stretch"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {allPostsData.map((record) => (
            <AppCard key={record.id} record={record} />
          ))}
        </Grid>
      </main>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
