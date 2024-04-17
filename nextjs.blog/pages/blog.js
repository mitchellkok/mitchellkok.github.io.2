import utilStyles from "../styles/utils.module.css"
import Head from 'next/head';
import Link from 'next/link'
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
        <h1 className={utilStyles.headingXL}>Blog</h1>
        {/* Add this <section> tag below the existing <section> tag */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <div className={utilStyles.listItemTitle}><Link href={`/posts/${id}`}>{title}</Link></div>
                  <div className={utilStyles.listItemSubtitle}>{date}</div>
                </li>
            ))}
            </ul>
        </section>
      </Layout>
    );
  }