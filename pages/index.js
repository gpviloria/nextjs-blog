import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2><b>My impression of the first month as a CPE third year student.</b></h2>
        <p>
          I find it very challenging with my very hectic schedule. Not enough time
          to do all my activities on time because of other chores. 
          Inspite of it all, I find it very fulfilling. I am very happy
          that I reached this year. This simply means that my dedication and
          hard work is finally showing me the glimpse of my goals. 
        </p>
        <p>
          I know now how to update my website.
        </p>
        <p>
          We are trying to build a sample website using:{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}