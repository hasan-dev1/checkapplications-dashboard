import Head from 'next/head';
import { FaFacebook } from 'react-icons/fa';
import '../styles/globals.css'
import Layout from './Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Check Applications</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
