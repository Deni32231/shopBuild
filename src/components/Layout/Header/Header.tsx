import React, { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../router";
import Container from "../../Container";
import SearchForm from "../../SearchForm/SearchForm";
import Button from "../../ui/Button/Button";
import BasketWidget from "./BasketWidget/BasketWidget";
import styles from "./header.module.css";

const Header: FC = () => {
  return (
    <>
      <header className={styles.mobile_header}>
        <Container>
          <div className={styles.mobile_top}>
            <img src="/img/burger.svg" alt="burger" />
            <img src="/img/header_logo.svg" alt="logo" />
            <BasketWidget />
          </div>
          <div className={styles.mobile_bottom}>
            <div className={styles.mobile_bottom_block}>
              <Link to={RouteNames.CATALOG}>
                <img src="/img/mobileCatalog.svg" alt="" />
                <span>Каталог</span>
              </Link>
            </div>
            <div className={styles.mobile_bottom_block}>
              <img src="/img/mobileSearch.svg" alt="" />
              <span>Поиск</span>
            </div>
          </div>
        </Container>
      </header>
      <header className={styles.wrapper}>
        <Container>
          <div className={styles.top}>
            <div className={styles.top__left}>
              <div className={styles.location}>
                <img
                  className={styles.location_marker}
                  src="/img/marker.svg"
                  alt="marker"
                />
                <div className={styles.location__text}>
                  <address className={styles.location_address}>
                    г. Кокчетав, ул. Ж. Ташенова 129Б{" "}
                  </address>
                  <span className={styles.location_help}>
                    (Рынок Восточный)
                  </span>
                </div>
              </div>
              <div className={styles.email}>
                <img
                  className={styles.email_img}
                  src="/img/mail.svg"
                  alt="mail"
                />
                <div className={styles.email__text}>
                  <span className={styles.email_address}>
                    opt.sultan@mail.ru
                  </span>
                  <span className={styles.email_help}>
                    На связи в любое время
                  </span>
                </div>
              </div>
            </div>
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <li className={styles.nav__item}>О компании</li>
                <li className={styles.nav__item}>Доставка и оплата</li>
                <li className={styles.nav__item}>Возврат</li>
                <li className={styles.nav__item}>Контакты</li>
              </ul>
            </nav>
          </div>
        </Container>
        <hr className={styles.line} />
        <Container>
          <div className={styles.bottom}>
            <img src="/img/header_logo.svg" alt="султан" />
            <Button>
              <Link to={RouteNames.CATALOG} className={styles.catalogBtn_link}>
                <div className={styles.catalogBtn}>
                  Каталог
                  <img
                    className={styles.catalogBtn_img}
                    src="/img/button_catalog.svg"
                    alt=""
                  />
                </div>
              </Link>
            </Button>
            <SearchForm callBack={() => {}} />
            <div className={styles.phone}>
              <div className={styles.phone__text}>
                <span className={styles.phone_number}>+7 (777) 490-00-91</span>
                <span className={styles.phone_worktime}>
                  время работы: 9:00-20:00
                </span>
                <span className={styles.phone_btn}>Заказать звонок</span>
              </div>
              <img src="/img/woman_phone.png" alt="woman" />
            </div>
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
            <BasketWidget />
          </div>
        </Container>
        <hr className={styles.line} />
      </header>
    </>
  );
};

export default Header;
