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
        <h2>Manifesto for Agile Software Development</h2>
      
        <p> 
          We are uncovering better ways of developingt software by doing it and helping otgher do it.
          Through this work we have come to value:
        </p>
        <p>
          Individuls and interactions over process and tools Working software over 
          comprehensive documentation Customer collaboartion over contract negotiation
            Responding to change over following a plan
              </p>
        <p>
          That is, while there is value in the items on the right, we value the items on the left more. 
        </p>
      </section>
    </Layout>
  );
}
