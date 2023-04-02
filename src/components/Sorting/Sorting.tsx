import React, { FC } from "react";
import Select from "../ui/Select/Select";

import styles from "./sorting.module.css";

export enum SortingEnum {
  PRICE = "price",
  NAME = "name",
  PRICE_REVERSE = "priceReverse",
  NAME_REVERSE = "nameReverse",
}

interface ISortingProps {
  options: { value: string; text: string }[];
  callBack: (str: string) => void;
}

const Sorting: FC<ISortingProps> = ({ options, callBack }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>Сортировка:</span>
      <Select callBack={callBack} options={options} />
    </div>
  );
};

export default Sorting;
