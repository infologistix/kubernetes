import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {HomepageFeatures, KubeSpectra, Concepts, Solutions} from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link className="button button--secondary button--lg" to="/docs/team">Get in Touch</Link>
      </div>
      <div>
        <img className={styles.featureImage} src="img/CNC_Grafik.png" alt="KubeSpectra logo"/>
      </div>
    </header>
  );
}
/* 
<div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
*/

export default function Home() {
  //const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`KubeSpectra`}
      description="Container based solutions with Docker and Kubernetes">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <KubeSpectra />
        <Concepts />
        <Solutions />
      </main>
    </Layout>
  );
}
