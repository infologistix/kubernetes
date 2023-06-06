import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Projects',
    image: "img/Cloud_Native_neu-1320x1320.png",
    description: (
      <>
        Explore our project portfolio: Witness our successful implementations across industries, showcasing innovation and business growth.
      </>
    ),
    to: "/docs/projects",
    message: "Explore",
  },
  {
    title: 'Service',
    image: "img/Cloud_Native_neu-1320x1320.png",
    description: (
      <>
        Experience our comprehensive services: Empowering businesses with cutting-edge solutions in Kubernetes, infrastructure, and AI-powered technologies.
      </>
    ),
    to: "/docs/service",
    message: "Explore",
  },
  {
    title: 'Team',
    image: "img/AI_neu-1320x1320.png",
    description: (
      <>
        Meet our expert team: Discover a dedicated group of professionals driving technological excellence and delivering tailored solutions for clients.
      </>
    ),
    to: "/docs/team",
    message: "Explore",
  },
];

function Feature({image, title, description,to,message}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} src={image} alt="infologistix logo"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={to}>
            {message}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
