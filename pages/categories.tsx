import React from "react";
import { useRouter } from "next/router";
import Layout from "./layout";
import { Typography } from "@mui/material";

type Props = {};

const categories = (props: Props) => {
  const route = useRouter();
  const query = route.query;
  const handle = query["list"];
  console.log("the query handle is ", handle);
  return (
    <Layout>
      <div style={{ marginTop: "50px" }}>
        <Typography variant="h1">
          hey your category id is {handle} and we are waiting for woke
        </Typography>
      </div>
    </Layout>
  );
};
export default categories;
