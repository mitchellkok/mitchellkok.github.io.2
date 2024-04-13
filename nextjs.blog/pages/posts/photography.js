import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';


export default function Photography() {
    return (
      <Layout>
        <Head>
          <title>Photography</title>
        </Head>
        <h1>Photography</h1>
        <p>	
        I've been an avid hobbyist ever since receiving my first camera in 2010. 
        Over the past couple years I've put more effort into furthering my abilities, finding opportunities to experience what the world of photography has to offer.
        </p>
        <p>
        While my main area of interest is landscape photography, I've since dipped my toes into a range of genres, from corporate events to weddings to commercial photography, and more!
        </p>
        <p>
        <Link href="https://mitchellkok.mypixieset.com/" target="_blank"><u>Check out my portfolio website here!</u></Link>
        </p>
      </Layout>
    );
  }