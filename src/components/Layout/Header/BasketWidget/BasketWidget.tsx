import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../router";
import { RootState } from "../../../../store/store";

import styles from "./basketWidget.module.css";

const BasketWidget = () => {
  const count = useSelector((state: RootState) => state.basket.countAllItems);

  return (
    <div className={styles.basket}>
      <div className={styles.basketCount}>
        <Link to={RouteNames.BASKET}>
          <img src="/img/basket_icon.svg" alt="basket" />
          <span className={styles.itemsCount}>{count}</span>
        </Link>
      </div>
      <div className={styles.basketPrice}>
        <span className={styles.basketPrice_top}>Корзина</span>
        <span className={styles.itemsPrice}>12 478 ₸</span>
      </div>
    </div>
  );
};

export default BasketWidget;
