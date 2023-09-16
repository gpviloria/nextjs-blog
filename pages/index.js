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
        <br>
        <p>•	2. Making An Effort</p>
        <br>
        <p>•	3. Being High Energy</p>
        <br>
        <p>•	4. Having A Positive Attitude</p> 
        <br>
        <p>•	5. Being Passionate</p>
        <br>
        <p>•	6. Using Good Body Language</p>
        <br>
        <p>•	7. Being Coachable</p>
        <br>
        <p>•	8. Doing A Little Extra</p> 
        <br>
        <p>•	9. Being Prepared</p>
        <br>
        <p>•	10. Having A Strong Work Ethic</p>
        <br>
        <p>
          This is a sample website using:{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}
