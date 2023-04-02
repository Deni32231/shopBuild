import React from "react";
import Container from "../../Container";
import SearchForm from "../../SearchForm/SearchForm";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.bg}>
      <Container>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src="/img/logo_footer.svg" alt="logo" />
            <p className={styles.left_text}>
              Компания «Султан» — снабжаем розничные магазины товарами "под
              ключ" в Кокчетаве и Акмолинской области
            </p>
            <span className={styles.left_span}>
              Подпишись на скидки и акции
            </span>
            <form
              className={styles.form}
              onSubmit={(e: React.FormEvent) => {
                e.preventDefault();
              }}
            >
              <div className={styles.input_wrapper}>
                <Input placeholder="Введите ваш E-mail" />
                <div className={styles.btn_wrapper}>
                  <Button>
                    <div className={styles.email_btn}>
                      <img src="/img/arrow.svg" alt="" />
                    </div>
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className={styles.list_wrapper}>
            <span className={styles.list__title}>Меню сайта:</span>
            <ul className={styles.list}>
              <li className={styles.list_item}>О компании</li>
              <li className={styles.list_item}>Доставка и оплата</li>
              <li className={styles.list_item}>Возврат</li>
              <li className={styles.list_item}>Контакты</li>
            </ul>
          </div>
          <div className={styles.list_wrapper}>
            <span className={styles.list__title}>Категории:</span>
            <ul className={styles.list}>
              <li className={styles.list_item}>Бытовая химия</li>
              <li className={styles.list_item}>Косметика и гигиена</li>
              <li className={styles.list_item}>Товары для дома</li>
              <li className={styles.list_item}>Товары для детей и мам</li>
              <li className={styles.list_item}>Посуда</li>
            </ul>
          </div>

          <div className={styles.price}>
            <span className={styles.price_title}>Скачать прайс-лист:</span>
            <Button>
              <div className={styles.downloadBtn}>
                <span className={styles.downloadBtn_text}>Прайс-лист</span>
                <img
                  className={styles.catalogBtn_img}
                  src="/img/download.svg"
                  alt=""
                />
              </div>
            </Button>
            <span className={styles.message_span}>Связь в мессенджерах:</span>
            <div className={styles.messages_wrapper}>
              <img src="/img/wh.png" alt="" />
              <img src="/img/tg.png" alt="" />
            </div>
          </div>

          <div className={styles.contacts}>
            <span className={styles.contacts_title}>Контакты:</span>
            <span className={styles.phone}>+7 (777) 490-00-91</span>
            <span className={styles.workTime}>время работы: 9:00-20:00</span>
            <span className={styles.phoneBtn}>Заказать звонок</span>
            <span className={styles.email}>opt.sultan@mail.ru </span>
            <span className={styles.emailHelper}>На связи в любое время</span>
            <div className={styles.cards}>
              <img src="/img/visa.png" alt="visa" />
              <img src="/img/mastercard.png" alt="mastercard" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
