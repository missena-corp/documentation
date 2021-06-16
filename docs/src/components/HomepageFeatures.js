import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HomepageFeatures.module.css";

import Translate, { translate } from "@docusaurus/Translate";
const FeatureList = [
  {
    title: "Pass Sans Pub",
    Svg: require("../../static/img/psp.svg").default,
    description: translate({
      message: "Monetization solution for your cookieless audience",
      description: "Noad Description",
    }),
    link: "/docs/noad",
  },
  {
    title: "Instant Recall",
    Svg: require("../../static/img/psp.svg").default,
    description: translate({
      message: "Retargeting solution for your cookieless audience",
      description: "Instant Recall Description",
    }),
    link: "/docs/instant-recall",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to={link}>
            <Translate>Get Started</Translate>
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
