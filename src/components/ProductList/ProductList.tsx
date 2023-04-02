import React, { FC, useEffect, useState } from "react";
import ProductCard, { IProduct } from "../ProductCard/ProductCard";

import styles from "./productList.module.css";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  const [indexPage, setIndexPage] = useState(1);

  const pagesList = [];

  const countPages = Math.ceil(products.length / 9);

  for (let i = 0; i < countPages; i++) {
    pagesList.push(i + 1);
  }

  return (
    <div>
      <div className={styles.wrapper}>
        {products.map((product, index) => {
          if (index + 1 <= indexPage * 9 && index + 1 > (indexPage - 1) * 9)
            return <ProductCard key={product.barcode} product={product} />;
        })}
      </div>
      <div className={styles.pagination__wrapper}>
        <button
          onClick={() => {
            if (indexPage !== 1) {
              setIndexPage(indexPage - 1);
            }
          }}
        >
          <img src="/img/arrowL.svg" alt="" />
        </button>
        <ul className={styles.pagination__pages}>
          {pagesList.map((page) => (
            <li
              key={page}
              onClick={() => setIndexPage(page)}
              className={`${styles.pagination_item} ${
                page === indexPage ? styles.active : ""
              }`}
            >
              {page}
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            if (indexPage !== countPages) {
              setIndexPage(indexPage + 1);
            }
          }}
        >
          <img src="/img/arrowR.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
