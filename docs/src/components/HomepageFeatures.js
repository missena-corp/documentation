import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

import Translate, { translate } from "@docusaurus/Translate";
const FeatureList = [
  {
    title: "Noad/Pass Sans Pub",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: translate({
      message: "Surfer sans Publicité et sans Tracking",
      description: "Noad Description",
    }),
  },
  {
    title: "Instant Recall",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: translate({
      message: "Save your products.",
      description: "Instant Recall Description",
    }),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
