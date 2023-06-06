import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import JokersImageUrl from '@site/static/img/joker.jpg';
import HaraldsImageUrl from '@site/static/img/harald.JPG';
import NicosImageUrl from '@site/static/img/nico.jpg';
import PaulsImageUrl from '@site/static/img/paul.jpg';


const FeatureList = [
  {
    title: 'Dr.-Ing. Harald Gerhards',
    image: HaraldsImageUrl,
    description: (
      <>
        Dr.-Ing. Harald Philipp Gerhards is Head of Cloud Engineering at infologistix GmbH and a lecturer in the Artificial Intelligence course at the Technical University of Würzburg-Schweinfurt (THWS).  
        He is a certified project and quality manager (TÜV) and has several years of experience as a senior consultant for both classic DWH and cloud and container platforms. As a system architect, he advises 
        customers holistically with a focus on cloud-native architectures and extensions for real-time analysis of existing DWH and BI architectures.
      </>
    ),
  },
  {
    title: 'Suphanat Aviphan',
    image: JokersImageUrl,
    description: (
      <>
        Suphanat Aviphan studied Business Informatics at the Ostbayerische Technische Hochschule Regensburg from 2013 to 2017 and completed his Bachelor's degree here. He then completed his master's degree at the University of Regensburg from 2017 to 2020 (title of master's thesis: "Analysis of Customer Reviews: Detecting user context with neural networks").
        Since March 2022, he has been conducting Kubernetes tutorials for students of the master's program "Artificial Intelligence" in the Cloud Native Computing module at the Würzburg-Schweinfurt University of Applied Sciences (THWS).
        Inspired by his semester abroad (Japan) and his work as a student trainee, Mr. Aviphan specialized in the fields of Data Science and Cloud Native Computing. At infologistix, he is a DevOps engineer in the field of Cloud Native Computing (CNC) with a focus on Cloud Native Infrastructure and conducts training for Kubernetes as a trainer.
        As an administrator, he manages the internal development environment (Azure) and the Kubernetes demo platform of infologistix GmbH.
      </>
    ),
  },
  {
    title: 'Nico Graap',
    image: NicosImageUrl,
    description: (
      <>
        Nico is an IT Consultant with a passion for problem-solving and technology. With his extensive knowledge and experience, he provides valuable insights and guidance to clients. 
        Nico's expertise in IT systems, coupled with his strong communication skills, makes him a trusted advisor who delivers effective solutions and drives business growth.
      </>
    ),
  },
  {
    title: 'Marie Padberg',
    image: JokersImageUrl,
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
        <img className={styles.featureImage} src={image} alt="infologistix logo"/>
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
