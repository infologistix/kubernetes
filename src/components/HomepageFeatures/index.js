import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Our projects',
    image: "img/Cloud_Native_neu-1320x1320.png",
    description: (
      <>
        List of all our projcts actual and finished
      </>
    ),
    to: "/docs/projects",
    message: "More",
  },
  {
    title: 'Our services',
    image: "img/Cloud_Native_neu-1320x1320.png",
    description: (
      <>
        need help? See our services
      </>
    ),
    to: "/docs/service",
    message: "More",
  },
  {
    title: 'Our team',
    image: "img/AI_neu-1320x1320.png",
    description: (
      <>
        Overview of the team
      </>
    ),
    to: "/docs/team",
    message: "More",
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
