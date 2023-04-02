import React from "react";
import BasketBlock from "../components/BasketBlock/BasketBlock";
import NavigationPage from "../components/NavigationPage/NavigationPage";
import TitlePage from "../components/TitlePage/TitlePage";

const Basket = () => {
  return (
    <div>
      <NavigationPage elements={["Главная", "Корзина"]} />
      <TitlePage title="Корзина" />
      <BasketBlock />
    </div>
  );
};

export default Basket;
