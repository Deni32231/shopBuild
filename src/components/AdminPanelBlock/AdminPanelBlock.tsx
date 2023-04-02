import React, { useEffect, useState } from "react";
import { IProduct } from "../ProductCard/ProductCard";

import productsData from "../../data/products.json";

import styles from "./adminPanelBlock.module.css";

const AdminPanelBlock = () => {
  const types = [
    "Уход за телом",
    "Уход за руками",
    "Уход за ногами",
    "Уход за лицом",
    "Уход за волосами",
    "Средства для загара",
    "Средства для бритья",
    "Подарочные наборы",
    "Гигиеническая продукция",
    "Гигиена полости рта",
    "Бумажная продукция",
  ];

  const productLS: IProduct[] = JSON.parse(
    localStorage.getItem("products") || "[]"
  );

  const [products, setProducts] = useState(productLS || []);
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [typesSelect, setTypesSelect] = useState([] as string[]);

  useEffect(() => {
    if (products.length !== 0) {
      localStorage.setItem("products", JSON.stringify(products));
    } else {
      setProducts(productsData);
    }
  }, [products]);

  const removeProduct = (barcode: number) => {
    setProducts([...products].filter((product) => product.barcode !== barcode));
  };

  const toggleType = (type: string) => {
    if (typesSelect.includes(type)) {
      setTypesSelect(
        [...typesSelect].filter((typeSelect) => typeSelect !== type)
      );
    } else {
      setTypesSelect([...typesSelect, type]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.products}>
        {products.map((product, index) => (
          <div key={product.barcode} className={styles.product}>
            <span>
              {product.brand} {product.name} {product.barcode}
            </span>
            <div className={styles.product_btns}>
              <button
                onClick={() => {
                  setCurrentProduct(product);
                  setCurrentIndex(index);
                  setShowModal(true);
                }}
                className={styles.product_btn}
              >
                редактировать
              </button>
              <button
                onClick={() => {
                  removeProduct(product.barcode);
                }}
                className={styles.product_btn}
              >
                удалить
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => {
          setShowModal(false);
          const tmpProducts = [...products];

          setCurrentProduct({ ...currentProduct, typeOfCare: typesSelect });

          tmpProducts[currentIndex] = currentProduct;
          setProducts(tmpProducts);
        }}
        className={`${styles.modal_wrapper} ${showModal ? "" : styles.hidden}`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles.modal}
        >
          <label>
            <span className={styles.modal_span}>Штрихкод</span>
            <input
              className={styles.modal_input}
              type="number"
              value={currentProduct.barcode}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  barcode: Number(e.target.value),
                });
              }}
            />
          </label>

          <label>
            <span className={styles.modal_span}>Бренд</span>
            <input
              className={styles.modal_input}
              type="text"
              value={currentProduct.brand}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  brand: e.target.value,
                });
              }}
            />
          </label>

          <label>
            <span className={styles.modal_span}>Описание</span>
            <input
              className={styles.modal_input}
              type="text"
              value={currentProduct.description}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  description: e.target.value,
                });
              }}
            />
          </label>

          <label>
            <span className={styles.modal_span}>Производитель</span>
            <input
              className={styles.modal_input}
              type="text"
              value={currentProduct.manufacturer}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  manufacturer: e.target.value,
                });
              }}
            />
          </label>

          <label>
            <span className={styles.modal_span}>Название</span>
            <input
              className={styles.modal_input}
              type="text"
              value={currentProduct.name}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  name: e.target.value,
                });
              }}
            />
          </label>

          <label>
            <span className={styles.modal_span}>Цена</span>
            <input
              className={styles.modal_input}
              type="number"
              value={currentProduct.price}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  price: Number(e.target.value),
                });
              }}
            />
          </label>

          <label>
            <span className={styles.modal_span}>Размер упаковки</span>
            <input
              className={styles.modal_input}
              type="text"
              value={currentProduct.size}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  name: e.target.value,
                });
              }}
            />
          </label>

          <label>
            <span className={styles.modal_span}>Тип упаковки</span>
            <select
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  sizeType: e.target.value,
                });
              }}
            >
              <option value="bottle">бутылка</option>
              <option value="box">коробка</option>
            </select>
          </label>

          <label>
            <span className={styles.modal_span}>URL картинки</span>
            <input
              className={styles.modal_input}
              type="text"
              value={currentProduct.urlImg}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  urlImg: e.target.value,
                });
              }}
            />
          </label>

          <label>
            <span className={styles.modal_span}>Тип ухода</span>

            <select
              onChange={(e) => {
                toggleType(e.target.value);
              }}
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <input
            className={styles.modal_selectInput}
            readOnly
            type="text"
            value={typesSelect.join(" ")}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPanelBlock;
