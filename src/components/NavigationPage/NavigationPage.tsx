import React, { FC } from "react";

import styles from "./navigationPage.module.css";

interface NavigationPageProps {
  elements: string[];
}

const NavigationPage: FC<NavigationPageProps> = ({ elements }) => {
  return (
    <div className={styles.wrapper}>
      {elements.map((element) => (
        <span className={styles.item} key={element}>
          {element}
        </span>
      ))}
    </div>
  );
};

export default NavigationPage;
