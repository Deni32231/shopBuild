import React, { FC } from "react";

import styles from "./titlePage.module.css";

interface TitlePageProps {
  title: string;
  children?: React.ReactNode;
}

const TitlePage: FC<TitlePageProps> = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default TitlePage;
