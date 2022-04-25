import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Layout from './layout'


const Home: NextPage = () => {
  return (
    <Layout> <Typography sx={{marginTop:"20%"}}>Hello World</Typography>    </Layout>
  )
}

export default Home
