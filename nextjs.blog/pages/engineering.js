import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';


export default function Engineering() {
    return (
      <Layout>
        <Head>
          <title>Engineering</title>
        </Head>
        <h1>Computer Engineering</h1>
        <p>	
						I am a recent Computer Engineering graduate from NTU's{' '}
            <Link href="https://www.ntu.edu.sg/admissions/undergraduate/premier-scholar-programmes/renaissance-engineering-programme/about-us" target="_blank"><u>Renaissance Engineering Programme</u></Link>.
						With computer engineering being the link between the hardware and software components of computer systems, my interests lie in IOT firware development and embedded systems, 
						though I do strive to excel in all areas of software and hardware development.
        </p>
        <p>
						<Link href="https://github.com/mitchellkok" target="_blank"><u>Checkout my GitHub page here!</u></Link>
        </p>
      </Layout>
    );
  }