import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Head from "next/head";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";
import AppCard from "../components/AppCard";
import { getSortedPostsData } from "../lib/posts";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home({ allPostsData }: { allPostsData: any[] }) {
  return (
    <div>
      <Head>
        <title>Zan Zendegi Azadi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: "1rem" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {allPostsData.map((record) => (
            <AppCard key={record.id} record={record} />
          ))}
        </Grid>
      </main>
    </div>
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
