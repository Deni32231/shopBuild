import React, { FC, useEffect, useState } from "react";
import { SortingEnum } from "../../Sorting/Sorting";

import styles from "./select.module.css";

type Option = { value: string; text: string };

interface SelectProps {
  options: Option[];
  callBack: (str: string) => void;
}

const Select: FC<SelectProps> = ({ options, callBack }) => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    callBack(selectedOption.value);
  }, [selectedOption]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.currentOptions}></div>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className={styles.currentOption}
      >
        <span className={styles.currentOptions_text}>
          {selectedOption.text}
        </span>
        <img
          className={`${
            selectedOption.value === SortingEnum.NAME_REVERSE ||
            selectedOption.value === SortingEnum.PRICE_REVERSE
              ? ""
              : styles.reverse
          }`}
          src="./img/sorting.svg"
          alt=""
        />
      </div>

      <div
        className={`${styles.options__wrapper} ${
          !showOptions ? styles.hidden : ""
        }`}
      >
        {options.map((option) => (
          <span
            className={styles.option}
            onClick={() => {
              setShowOptions(false);
              setSelectedOption({ value: option.value, text: option.text });
            }}
            data-value={option.value}
            key={option.value}
          >
            {option.text}
            <img
              className={`${
                option.value === SortingEnum.NAME_REVERSE ||
                option.value === SortingEnum.PRICE_REVERSE
                  ? ""
                  : styles.reverse
              }`}
              src="./img/sorting.svg"
              alt=""
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Select;
