import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import JokersImageUrl from '@site/static/img/joker.jpg';
import HaraldsImageUrl from '@site/static/img/harald.JPG';
import SuphanatsImageUrl from '@site/static/img/suphanat.jpg';
import MariesImageUrl from '@site/static/img/marie.jpg';
import NicosImageUrl from '@site/static/img/nico.jpg';
import PaulsImageUrl from '@site/static/img/paul.jpg';
import AndreasImageUrl from '@site/static/img/andreas.jpg';


const FeatureList = [
  {
    title: 'Harald Gerhards',
    image: HaraldsImageUrl,
    description: (
      <>
        Harald Philipp Gerhards is the leader of the KubeSpectra project and Head of Cloud Engineering at infologistix GmbH. He did his PhD about sensor data analysis and automation in the field of renewable enrgy at RWTH Aachen University and is lecturer in the Artificial Intelligence Master program at the Technical University of Applied Sciences of Würzburg-Schweinfurt (THWS).  
        He has several years of experience as a senior system architect for DWH, private cloud and container platforms. He focuses on cloud-native architectures, security and extensions for real-time analysis of existing DWH and BI architectures.
      </>
    ),
  },
  {
    title: 'Suphanat Aviphan',
    image: SuphanatsImageUrl,
    description: (
      <>
        Suphanat Aviphan studied Business Informatics at the OTH and the University of Regensburg. The title of master's thesis was "Analysis of Customer Reviews: Detecting user context with neural networks".
        Inspired by his semester abroad (Japan) and his work as a student trainee, he specialized in the fields of Data Science and Cloud Native Computing. He is a certified Kubernetes Developer and DevOps engineer with a focus on platform management and conducts training for Kubernetes.
        As an administrator, he manages the internal development environment (Azure) and the Kubernetes demo platform of kubespectra
      </>
    ),
  },
  {
    title: 'Nico Graap',
    image: NicosImageUrl,
    description: (
      <>
        Nico is a data engineer with a passion for problem-solving and technology. With his extensive knowledge and experience, he provides valuable insights and guidance to clients. His personal focus as a mathematician is data science.
        Nico's expertise in IT systems, coupled with his strong communication skills, makes him a trusted advisor who delivers effective solutions and drives business growth. As a certified SCRUM Master he serves the KubeSpectra project to reach its goals.
      </>
    ),
  },
  {
    title: 'Marie Padberg',
    image: MariesImageUrl,
    description: (
      <>
        Marie Padberg is a Computer Science graduate and works as a DevOps and AI Engineer at infologistix GmbH. She is passionate about exploring and deepening her knowledge of Kubernetes and its related security mechanisms, 
        as well as Natural Language Processing. Marie supports clients in developing secure container platforms based on Kubernetes, designing clusters, integrating services like container build pipelines, and linking user 
        management systems. Her certifications in SUSE Rancher and SUSE NeuVector validate her expertise in cloud computing and container management. Additionally, Marie provides training to teams on cloud-native technologies.
      </>
    ),
  },
  {
    title: 'Andreas Platau',
    image: AndreasImageUrl,
    description: (
      <>
        Andreas Platau is a highly qualified professional who graduated in Business Informatics at the University of Karlsruhe. 
        During his studies, Andreas focused on cloud-based architecture development and gained practical experience through eCommerce projects. Joining infologistix expanded his expertise, where he specialized 
        in Kubernetes, Kafka, and IBM DataStage. Since June 2020, he has been actively involved in executing DataStage and Data Warehouse projects for esteemed clients in the finance and insurance industry. 
        Andreas's skills and experience make him a valuable asset in delivering successful projects.
      </>
    ),
  },
  {
    title: 'Paul Schmidt',
    image: PaulsImageUrl,
    description: (
      <>
        Paul Schmidt is an Cloud Architect for infologistix GmbH. He graduated as M.-Eng in information systems. His focus is on Industry 4.0 and Business Intelligence. His technical specialties include pattern 
        recognition and machine learning, as well as cloud integrations for AI. At the time of writing he is designing network architectures for cloud systems and operates as DevOps engineer for rancher managed 
        clusters and integrated services. In the year 2021 he held a lecture on "AI development for peak shaving" at "TDWI München digital".
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div class='row'>
      <div className={styles.inlineImage}>
        <img className={styles.featureImage} src={image} alt="profile image"/>
      </div>
      <div className={styles.inlineText}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
