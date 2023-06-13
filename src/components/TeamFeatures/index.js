import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import JokersImageUrl from '@site/static/img/joker.jpg';
import HaraldsImageUrl from '@site/static/img/harald.JPG';
import MariesImageUrl from '@site/static/img/marie.jpg';
import NicosImageUrl from '@site/static/img/nico.jpg';
import PaulsImageUrl from '@site/static/img/paul.jpg';


const FeatureList = [
  {
    title: 'Harald Gerhards',
    image: HaraldsImageUrl,
    description: (
      <>
        Harald Philipp Gerhards is the leader of the kubespectra project and Head of Cloud Engineering at infologistix GmbH. He did his PhD about sensor data analysis and automation in the field of renewable enrgy at RWTH Aachen University and is lecturer in the Artificial Intelligence Master program at the Technical University of Applied Sciences of Würzburg-Schweinfurt (THWS).  
        He has several years of experience as a senior system architect for DWH, private cloud and container platforms. He focuses on cloud-native architectures, security and extensions for real-time analysis of existing DWH and BI architectures.
      </>
    ),
  },
  {
    title: 'Suphanat Aviphan',
    image: JokersImageUrl,
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
        Nico is an data engineer with a passion for problem-solving and technology. With his extensive knowledge and experience, he provides valuable insights and guidance to clients. His personal focus as a mathematician is data science.
        Nico's expertise in IT systems, coupled with his strong communication skills, makes him a trusted advisor who delivers effective solutions and drives business growth. As a certified SCRUM Master he serves the kubespectra project to reach its goals.
      </>
    ),
  },
  {
    title: 'Marie Padberg',
    image: MariesImageUrl,
    description: (
      <>
        With a deep understanding of statistical analysis and machine learning algorithms, Marie uncovers patterns and trends that drive strategic decision-making. Her expertise in data visualization and storytelling 
        makes her findings easily accessible and actionable for stakeholders. The passion for innovation and continuous learning keeps her at the forefront of cutting-edge techniques, making her an invaluable 
        asset in the world of data science.
      </>
    ),
  },
  {
    title: 'Andreas Platau',
    image: JokersImageUrl,
    description: (
      <>
        Andreas Platau studied Business Informatics at the University of Karlsruhe, the Karlsruhe Institute of Technology (KIT), from 2013-2015 and received his Master's degree.
        Before that, he completed his bachelor's degree at the Albstadt-Sigmaringen University of Applied Sciences.
        Already during his studies he focused on the development of cloud-based architectures and deepened his know-how through projects in the field of eCommerce. After joining infologistix, he expanded his expertise 
        by focusing on Kubernetes / Kafka and IBM DataStage. Since June 2020, he has been working continuously in DataStage and Data Warehouse projects for our top customers from the finance and insurance industry.
      </>
    ),
  },
  {
    title: 'Paul Schmidt',
    image: PaulsImageUrl,
    description: (
      <>
        Paul Schmidt is an IT Consultant for infologistix GmbH. He graduated as M.-Eng in information systems. His focus is on Industry 4.0 and Business Intelligence. His technical specialties include pattern 
        recognition and machine learning, as well as cloud integrations for AI. At the time of writing he is designing network architectures for cloud systems and operates as DevOps engineer for rancher managed 
        clusters and integrated services. During the year 2021 he held a lecture at "TDWI München digital" on "AI development for peak shaving".
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