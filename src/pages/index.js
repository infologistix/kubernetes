import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {HomepageFeatures, KubeSpectra, ConceptFeatures, Solutions} from '@site/src/components/HomepageFeatures';
import LogoImageUrl from '@site/static/img/logo_new.png';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{height:"100%", width:"100%"}} className={clsx('hero hero--primary', styles.heroBanner, styles.gradient)}>
      <div style={{marginLeft: "100px"}}>
        <div className={styles.inline}>
          <img className={styles.featureImage} src={LogoImageUrl} alt="KubeSpectra logo"/>
        </div>
        <div className={styles.inline}>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.subtitle}>Unleashing the Power of Kubernetes <br /> to Illuminate Your Digital Infrastructure</p>
          <Link className="button button--secondary button--lg" to="/docs/team">Get in Touch</Link>
        </div>
      </div>             
    </header>
  );
}


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
        <ConceptFeatures />
        <Solutions />
      </main>
    </Layout>
  );
}
