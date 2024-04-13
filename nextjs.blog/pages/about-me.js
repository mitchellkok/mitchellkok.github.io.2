import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';


export default function AboutMe() {
    return (
      <Layout>
        <Head>
          <title>About Me</title>
        </Head>
        {/* <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
            }
        /> */}
        <h1>About Me</h1>
        <h2>
          This is my first post!
        </h2>
      </Layout>
    );
  }