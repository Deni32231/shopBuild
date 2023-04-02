import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addItem,
  clearBasket,
  deleteItem,
  removeItem,
} from "../../store/reducers/basketSlice";
import { RootState } from "../../store/store";
import Button from "../ui/Button/Button";

import styles from "./basketBlock.module.css";

const BasketBlock = () => {
  const [showModal, setShowModal] = useState(false);

  const basket = useSelector((state: RootState) => state.basket);
  const items = basket.items;

  const dispatch = useDispatch();

  return (
    <div className={styles.basket}>
      <div className={styles.basketItems}>
        {items.map((item) => (
          <div key={item.product.barcode} className={styles.basketItem}>
            <div className={styles.img_wrapper}>
              <img src={item.product.urlImg} alt={item.product.name} />
            </div>
            <div className={styles.item_info}>
              <img src="/img/bottle.svg" alt="bottle" />
              <span className={styles.item_size}>{item.product.size}</span>
              <p className={styles.item_name}>
                {item.product.brand} {item.product.name}
              </p>
              <p className={styles.item_description}>
                {item.product.description}
              </p>
            </div>
            <div className={styles.right_wrap}>
              <div className={styles.count}>
                <input
                  onClick={() => dispatch(removeItem(item.product))}
                  readOnly
                  type="button"
                  value="-"
                />
                <span>{item.count}</span>
                <input
                  onClick={() => dispatch(addItem(item.product))}
                  readOnly
                  type="button"
                  value="+"
                />
              </div>
              <span className={styles.price}>
                {item.product.price * item.count} руб
              </span>
              <Button>
                <div
                  onClick={() => dispatch(deleteItem(item.product))}
                  className={styles.delete_wrapper}
                >
                  <img src="/img/delete.svg" alt="delete" />
                </div>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.checkout}>
        <Button>
          <span
            onClick={() => {
              dispatch(clearBasket());
              setShowModal(true);
            }}
            className={styles.checkoutBtn_text}
          >
            Оформить заказ
          </span>
        </Button>
        <span className={styles.fullPrice}>{basket.priceAllItems} руб</span>
      </div>
      <div
        onClick={() => setShowModal(false)}
        className={`${styles.modal} ${showModal ? "" : styles.hidden}`}
      >
        <div className={styles.modal_content}>
          <img src="/img/successfully.svg" alt="успешно" />
          <span className={styles.modal_title}>Спасибо за заказ</span>
          <span className={styles.modal_info}>
            Наш менеджер свяжется с вами в ближайшее время
          </span>
          <button
            onClick={() => setShowModal(false)}
            className={styles.closeBtn}
          >
            <img src="/img/closeBtn.svg" alt="x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketBlock;
