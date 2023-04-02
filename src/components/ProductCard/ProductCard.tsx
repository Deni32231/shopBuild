import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../ui/Button/Button";
import { addItem } from "../../store/reducers/basketSlice";

import styles from "./productCard.module.css";

export interface IProduct {
  urlImg: string;
  name: string;
  sizeType: string;
  size: string;
  barcode: number;
  manufacturer: string;
  brand: string;
  description: string;
  price: number;
  typeOfCare: string[];
}

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.img_wrapper}>
        <img className={styles.img} src={product.urlImg} alt={product.name} />
      </div>
      <div className={styles.info_wrapper}>
        <div>
          <img
            className={styles.sizeType}
            src={
              product.sizeType == "bottle"
                ? "./img/bottle.svg"
                : "./img/box.svg"
            }
            alt={product.sizeType}
          />
          <span className={styles.size}>{product.size}</span>
        </div>
        <p className={styles.fullname}>
          <Link to={`/product/${product.barcode}`}>
            <span className={styles.fullname_brand}>{product.brand} </span>
            {product.name}
          </Link>
        </p>
        <div className={styles.info_block}>
          <p className={styles.info}>
            <span className={styles.info_span}>Штрихкод:</span>
            {product.barcode}
          </p>
          <p className={styles.info}>
            <span className={styles.info_span}>Производитель:</span>
            {product.manufacturer}
          </p>
          <p className={styles.info}>
            <span className={styles.info_span}>Бренд:</span>
            {product.brand}
          </p>
        </div>
        <div className={styles.bottom_block}>
          <span className={styles.price}>{product.price} руб</span>
          <Button>
            <div
              onClick={() => dispatch(addItem(product))}
              className={styles.button_inner}
            >
              <span className={styles.button_text}>В КОРЗИНУ</span>
              <img src="/img/card_basket.svg" alt="basket" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
