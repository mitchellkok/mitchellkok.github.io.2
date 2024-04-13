import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        My name is Mitchell. I'm a recent Computer Engineering graduate from NTU's Renaissance Engineering Programme, and this is my website!
        </p>
        <p>
        Beyond engineering, I'm also an avid photographer. Follow the links below to find out more!
        </p>
        <p>
          <Link href="/posts/engineering">Engineering</Link>
          {' '}&#183;{' '}
          <Link href="/posts/photography">Photography</Link>
        </p>
      </section>
    </Layout>
  );
}