import React, { FC, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Select from "../ui/Select/Select";

import styles from "./searchPanel.module.css";

interface SearchPanelProps {
  types: string[];
  manufacturers: string[];
  selectedTypes: string[];
  selectType: (type: string) => void;
  toggleManufacturers: (str: string) => void;
  setMinPrice: (num: number) => void;
  setMaxPrice: (num: number) => void;
  resetManufacturers: () => void;
}

const SearchPanel: FC<SearchPanelProps> = ({
  types,
  manufacturers,
  selectedTypes,
  selectType,
  toggleManufacturers,
  setMinPrice,
  setMaxPrice,
  resetManufacturers,
}) => {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(10000);
  const [manufactureSearch, setManufacturerSearch] = useState("");

  const [lookAll, setLookAll] = useState(false);

  useEffect(() => {
    resetManufacturers();
  }, [manufactureSearch]);

  useEffect(() => {
    setMinPrice(priceMin);
    setMaxPrice(priceMax);
  }, [priceMin, priceMax]);

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</span>
      <span className={styles.price_title}>
        Цена <b>руб</b>
      </span>
      <div className={styles.price__inputs}>
        <input
          type="number"
          min="0"
          value={priceMin}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPriceMin(Number(e.target.value));
          }}
        />
        <span>-</span>
        <input
          type="number"
          min="0"
          value={priceMax}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPriceMax(Number(e.target.value));
          }}
        />
      </div>
      <div className={styles.manufacturer}>
        <span className={styles.manufacturer_title}>Производитель</span>
        <SearchForm callBack={setManufacturerSearch} />
        <div className={styles.manufacturers}>
          {manufacturers.map((manufacturer, index) => {
            if (
              (lookAll || index < 4) &&
              manufacturer
                .toLowerCase()
                .includes(manufactureSearch.toLowerCase())
            ) {
              return (
                <label className={styles.label} key={manufacturer}>
                  <input
                    className={styles.input}
                    type="checkbox"
                    value={manufacturer}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      toggleManufacturers(e.target.value)
                    }
                  />
                  {manufacturer}
                </label>
              );
            }
          })}
          <span onClick={() => setLookAll(!lookAll)} className={styles.lookAll}>
            {!lookAll ? (
              <>
                Показать все <img src="./img/sorting.svg" alt="" />
              </>
            ) : (
              <>
                Скрыть все{" "}
                <img
                  className={styles.reverse}
                  src="./img/sorting.svg"
                  alt=""
                />
              </>
            )}
          </span>
        </div>
      </div>
      <div className={styles.types}>
        {types.map((type) => (
          <p
            onClick={() => selectType(type)}
            key={type}
            className={`${styles.type} ${
              selectedTypes.find((selectedType) => selectedType === type)
                ? styles.active
                : ""
            }`}
          >
            {type}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchPanel;
