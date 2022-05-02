import React from "react";
import CustomCategories from "../components/Categories";
import Layout from "./layout";
type Props = {};

export default function categories({}: Props) {
  return (
    <Layout>
      <CustomCategories />
    </Layout>
  );
}
