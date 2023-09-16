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
        <h2><b>10 Things That Require Zero Talent</b></h2>
        <p>•	1. Being On Time</p>
        <p>•	2. Making An Effort</p>
        <p>•	3. Being High Energy</p>
        <p>•	4. Having A Positive Attitude</p> 
        <p>•	5. Being Passionate</p>
        <p>•	6. Using Good Body Language</p>
        <p>•	7. Being Coachable</p>
        <p>•	8. Doing A Little Extra</p> 
        <p>•	9. Being Prepared</p>
        <p>•	10. Having A Strong Work Ethic</p>
        <p>
          This is a sample website using:{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}
