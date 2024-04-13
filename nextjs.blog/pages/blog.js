import utilStyles from "../styles/utils.module.css"
import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

export default function Blog({ allPostsData }) {
    return (
      <Layout>
        <Head>
          <title>Blog</title>
        </Head>
        <h1>Blog</h1>
        {/* Add this <section> tag below the existing <section> tag */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, content }) => (
                <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
                <br />
                {content}
                </li>
            ))}
            </ul>
        </section>
      </Layout>
    );
  }