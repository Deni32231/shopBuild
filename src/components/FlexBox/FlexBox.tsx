import React, { FC } from "react";

import styles from "./flexBox.module.css";

interface FlexBoxProps {
  children?: React.ReactNode;
}

const FlexBox: FC<FlexBoxProps> = ({ children }) => {
  return <div className={styles.flexBox}>{children}</div>;
};

export default FlexBox;
