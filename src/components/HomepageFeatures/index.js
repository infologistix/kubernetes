import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import ProjectsImageUrl from '@site/static/img/Project_ICON.png';
import ServiceImageUrl from '@site/static/img/Service_ICON.png';
import TeamImageUrl from '@site/static/img/Team_ICON.png';

const FeatureList = [
  {
    title: 'Projects',
    image: ProjectsImageUrl,
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
    image: ServiceImageUrl,
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
    image: TeamImageUrl,
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
      <div className={styles.border}>
      <div className="text--center">
        <img className={styles.featureImage} src={image} alt="KubeSpectra logo"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p className={styles.description_height}>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={to}>
            {message}
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export function HomepageFeatures() {
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

export function KubeSpectra() {
  return (
  <div className="container">
    <h1 className={styles.center}>KubeSpectra</h1>
    <p className={styles.text_kubespectra}>stands for Kubernetes Spectrum.<br /> Our mission is to enable organizations to archievce seamless digital transformation and stay ahead in a rapidly evolving technological landscape.</p>
  </div>
  );
}


const ConceptList = [
  {
    title: 'Discovery',
    description: (
      <>
        The starting point is an assessment of your current infrastructure:
      </>
    ),
    listItems: (
      <ul>
        <li>Business and IT goals</li>
        <li>Evaluation of current infrastructure</li>
        <li>identification of resource gaps <br /><br /><br /><br /></li>
      </ul>
      )
  },
  {
    title: 'Design',
    description: (
      <>
        Cooperative development of a High-level design:
      </>
    ),
    listItems: (
      <ul>
        <li>Utilization of best practices</li>
        <li>Involvement of all stakeholders</li>
        <li>Development and documentation of a high-level design</li>
      </ul>
      )
  },
  {
    title: 'Deployment',
    description: (
      <>
        Collaborative technical implementation of the architecture design:
      </>
    ),
    listItems: (
    <ul>
      <li>Consideration of hardware and network requirements</li>
      <li>Configuration of products and processes</li>
      <li>Testing (registration, patching, etc.)</li>
      <li>Backups</li>
      <li>Active knowledge transfer</li>
    </ul>
    )
  },
  {
    title: 'Optimize',
    description: (
      <>
        Avoiding risks from suboptimal configuration:
      </>
    ),
    listItems: (
      <ul>
        <li>review of systems and processes (Health Checks)</li>
        <li>Minimization of downtime through proactive maintenance</li>
        <li>Active knowledge transfer</li>
      </ul>
      )
  },
]

// Liste für 4 Konzepte anlegen wie auf infologistix Seite
function Concepts({title, description, listItems}) {
  return (  
    <div className={clsx('col col--3')}>
      <div className={styles.border}>
        <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="text--left">{listItems}</div>
        </div>
    </div>
  </div>
  );
}

export function ConceptFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
      <h1 className={styles.center}>Concepts</h1>
        <div className="row">
          {ConceptList.map((props, idx) => (
            <Concepts key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}




export function Solutions() {
  return (
  <div className="container">
    <h1 className={styles.center}>Solutions</h1>
    <p className={styles.text_solutions}>We leverage open-source software from the Cloud Native Computing Foundation (CNCF), the Apache Foundation, and major distributors such as SUSE and Confluent.</p>
    <p className={styles.text_solutions}><b>Methods:</b> Open Source Development | Software Engineering | DevOps | DevSecOps | SCRUM | Cloud Native Architectures | Hybrid Architectures | Kappa Architectures</p>
    <p className={styles.text_solutions}><b>Provider:</b> CNCF | Apache | SUSE | Rancher | Confluent | Imply | Pure | Storage | Google Cloud Platform | AWS | Microsoft Azure</p>
    <p className={styles.text_solutions}><b>Software:</b> Kubernetes | Docker | Prometheus | Grafana | Istio | Rancher | Github | Apache Druid | Apache Kafka | Click House | S3 Storage</p>
    <div className={styles.buttons}>
      <div className="text--center">
        <Link
          className="button button--secondary button--lg"
          to="/docs/service">
            Learn more
        </Link>
      </div>
    </div>
  </div>
  );
}