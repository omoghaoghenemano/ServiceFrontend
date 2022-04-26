
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Layout from "./layout";
import Banner from "../components/Banner/Banner";
import AvailableServices from "../components/AvailableServices";


const Home: NextPage = () => {
  return (
    <Layout>
      {" "}
      <div>
        <Banner />
        <AvailableServices/>
      </div>{" "}
    </Layout>
  );
};

export default Home;
