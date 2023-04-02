import React, { FC } from "react";

import styles from "./productsTypes.module.css";

interface ProductsTypesProps {
  types: string[];
  selectedTypes: string[];
  onClick: (type: string) => void;
}

const ProductsTypes: FC<ProductsTypesProps> = ({
  types,
  selectedTypes,
  onClick,
}) => {
  return (
    <div className={styles.wrapper}>
      {types.map((type) => (
        <span
          onClick={() => onClick(type)}
          key={type}
          className={`${styles.item} ${
            selectedTypes.find((selectedType) => selectedType === type)
              ? styles.active
              : ""
          }`}
        >
          {type}
        </span>
      ))}
    </div>
  );
};

export default ProductsTypes;
