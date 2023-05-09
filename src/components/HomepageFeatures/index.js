import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Platform Engineering',
    image: "img/Cloud_Native_neu-1320x1320.png",
    description: (
      <>
        Containerbasierte Lösungen auf Basis von Docker und Kubernetes
      </>
    ),
    to: "/docs/platform",
    message: "Mehr Infos",
  },
  {
    title: 'Architektur + Cloud',
    image: "img/Cloud_Native_neu-1320x1320.png",
    description: (
      <>
        Implementierungen auf bare metal, in Ihrer private Cloud, bei Google, AWS oder Azure
      </>
    ),
    to: "/docs/cloud",
    message: "Mehr Infos",
  },
  {
    title: 'Software Engineering + AI',
    image: "img/AI_neu-1320x1320.png",
    description: (
      <>
        Entwicklung von Anwendungssoftware und künstlicher Intelligenz
      </>
    ),
    to: "/docs/software",
    message: "Mehr Infos",
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
