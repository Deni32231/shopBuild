import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { IProduct } from "../ProductCard/ProductCard";
import Button from "../ui/Button/Button";
import { addItemWithCount } from "../../store/reducers/basketSlice";

import styles from "./productBlock.module.css";

interface IProductBlockProps {
  product: IProduct;
}

const ProductBlock: FC<IProductBlockProps> = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showCharacteristics, setShowCharacteristics] = useState(false);

  const [amountProducts, setAmountProducts] = useState(1);

  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.img_wrapper}>
        <img className={styles.img} src={product.urlImg} alt={product.name} />
      </div>
      <div className={styles.info}>
        <span className={styles.stock}>В наличии</span>
        <span className={styles.name}>
          <b>{product.brand} </b>
          {product.name}
        </span>
        <div className={styles.size_wrapper}>
          <img
            src={
              product.sizeType === "bottle" ? "/img/bottle.svg" : "/img/box.svg"
            }
            alt="bottle"
          />
          <span className={styles.size}>{product.size}</span>
        </div>
        <div className={styles.buyBlock}>
          <span className={styles.price}>
            {product.price * amountProducts} руб
          </span>
          <div className={styles.amount_wrapper}>
            <input
              className={styles.buyBlock__btn}
              onClick={() => {
                if (amountProducts > 1) {
                  setAmountProducts(amountProducts - 1);
                }
              }}
              type="button"
              value="-"
            />
            <span className={styles.amountProducts}>{amountProducts}</span>
            <input
              className={styles.buyBlock__btn}
              onClick={() => setAmountProducts(amountProducts + 1)}
              type="button"
              value="+"
            />
          </div>
          <Button>
            <div
              onClick={() =>
                dispatch(addItemWithCount({ product, count: amountProducts }))
              }
              className={styles.button_inner}
            >
              <span className={styles.button_text}>В КОРЗИНУ</span>
              <img src="/img/card_basket.svg" alt="basket" />
            </div>
          </Button>
        </div>
        <div className={styles.helpBtns}>
          <div className={styles.helpBlock}>
            <img src="/img/share.svg" alt="share" />
          </div>
          <div className={styles.helpBlock}>
            <span className={styles.helpBlock__text}>
              При покупке от <b>3 000 руб</b> бесплатная доставка по Кокчетаву и
              области
            </span>
          </div>
          <div className={styles.helpBlock}>
            <span className={styles.helpBlock__priceText}>Прайс-лист</span>
            <img src="/img/downloadProduct.svg" alt="download" />
          </div>
        </div>
        <div className={styles.firstInfo}>
          <p className={styles.firstInfo_text}>
            <span className={styles.firstInfo_span}>Производитель:</span>
            {product.manufacturer}
          </p>
          <p className={styles.firstInfo_text}>
            <span className={styles.firstInfo_span}>Бренд:</span>
            {product.brand}
          </p>
          <p className={styles.firstInfo_text}>
            <span className={styles.firstInfo_span}>Артикул:</span>
            460404
          </p>
          <p className={styles.firstInfo_text}>
            <span className={styles.firstInfo_span}>Кол-во в коробке:</span>2
          </p>
          <p className={styles.firstInfo_text}>
            <span className={styles.firstInfo_span}>Штрихкод:</span>
            {product.barcode}
          </p>
          <p className={styles.firstInfo_text}>
            <span className={styles.firstInfo_span}>
              Размеры коробки
              <span className={styles.firstInfo_smallText}>(Д*Ш*В)</span>:
            </span>
            10х10х10
          </p>
          <p className={styles.firstInfo_text}>
            <span className={styles.firstInfo_span}>Вес коробки:</span>
            {product.size}
          </p>
        </div>
        <div className={styles.description}>
          <span
            onClick={() => {
              setShowDescription(!showDescription);
            }}
            className={styles.description_title}
          >
            Описание
          </span>
          <img src="/img/sorting.svg" alt="\/" />
          <div
            className={`${styles.description_wrapper} ${
              showDescription ? "" : styles.hidden
            }`}
          >
            <p className={styles.description_text}>{product.description}</p>
          </div>
        </div>
        <div className={styles.characteristics}>
          <span
            onClick={() => setShowCharacteristics(!showCharacteristics)}
            className={styles.characteristics_title}
          >
            Характеристики
          </span>
          <img src="/img/sorting.svg" alt="\/" />
          <div
            className={`${styles.characteristics_wrapper} ${
              showCharacteristics ? "" : styles.hidden
            }`}
          >
            <p className={styles.firstInfo_text}>
              <span className={styles.firstInfo_span}>Назначение:</span>
              {product.typeOfCare.join(" ")}
            </p>
            <p className={styles.firstInfo_text}>
              <span className={styles.firstInfo_span}>Тип:</span>
              {product.typeOfCare.join(" ")}
            </p>
            <p className={styles.firstInfo_text}>
              <span className={styles.firstInfo_span}>Производитель:</span>
              {product.manufacturer}
            </p>
            <p className={styles.firstInfo_text}>
              <span className={styles.firstInfo_span}>Бренд:</span>
              {product.brand}
            </p>
            <p className={styles.firstInfo_text}>
              <span className={styles.firstInfo_span}>Артикул:</span>
              {product.barcode}
            </p>
            <p className={styles.firstInfo_text}>
              <span className={styles.firstInfo_span}>Штрихкод:</span>
              {product.barcode}
            </p>
            <p className={styles.firstInfo_text}>
              <span className={styles.firstInfo_span}>Вес:</span>
              {product.sizeType}
            </p>
            <p className={styles.firstInfo_text}>
              <span className={styles.firstInfo_span}>Объем:</span>
              {product.size}
            </p>
            <p className={styles.firstInfo_text}>
              <span className={styles.firstInfo_span}>Кол-во в коробке:</span>
              {product.size}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
