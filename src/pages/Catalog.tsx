import React, { useEffect, useState } from "react";
import FlexBox from "../components/FlexBox/FlexBox";
import NavigationPage from "../components/NavigationPage/NavigationPage";
import ProductCard, { IProduct } from "../components/ProductCard/ProductCard";
import ProductList from "../components/ProductList/ProductList";
import ProductsTypes from "../components/ProductsTypes/ProductsTypes";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import Sorting, { SortingEnum } from "../components/Sorting/Sorting";
import TitlePage from "../components/TitlePage/TitlePage";

import { sortProducts } from "../utils";

const Catalog = () => {
  const options = [
    {
      value: SortingEnum.NAME,
      text: "Название",
    },
    {
      value: SortingEnum.NAME_REVERSE,
      text: "Название",
    },
    {
      value: SortingEnum.PRICE,
      text: "Цена",
    },
    {
      value: SortingEnum.PRICE_REVERSE,
      text: "Цена",
    },
  ];

  const manufacturersList = [
    "Нэфис1",
    "Нэфис2",
    "Нэфис3",
    "Нэфис4",
    "Нэфис5",
    "Нэфис6",
    "Нэфис7",
    "Нэфис8",
  ];

  const productsTypes = [
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

  const [products, setProducts] = useState([] as IProduct[]);
  const [sortedType, setSortedType] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([] as string[]);
  const [manufacturers, setManufacturers] = useState([] as string[]);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(10000);

  useEffect(() => {
    setProducts(
      sortProducts({
        selectedTypes,
        sortedType,
        manufacturers,
        priceMax,
        priceMin,
      })
    );
  }, [sortedType, selectedTypes, manufacturers, priceMin, priceMax]);

  const toggleSelectedTypes = (type: string) => {
    if (selectedTypes.find((selectedType) => selectedType === type)) {
      setSelectedTypes(
        [...selectedTypes].filter((selectedType) => selectedType !== type)
      );
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const toggleManufacturers = (manufacturerSelect: string) => {
    const find = manufacturers.find(
      (manufacture) => manufacture === manufacturerSelect
    );
    if (find) {
      setManufacturers(
        [...manufacturers].filter(
          (manufacturer) => manufacturer !== manufacturerSelect
        )
      );
    } else {
      setManufacturers([...manufacturers, manufacturerSelect]);
    }
  };

  const resetManufacturers = () => {
    setManufacturers([]);
  };

  return (
    <div>
      <NavigationPage elements={["Главная", "Косметика и гигиена"]} />
      <TitlePage title="Косметика и гигиена">
        <Sorting options={options} callBack={setSortedType} />
      </TitlePage>
      <ProductsTypes
        selectedTypes={selectedTypes}
        types={productsTypes}
        onClick={toggleSelectedTypes}
      />
      <FlexBox>
        <SearchPanel
          types={productsTypes}
          manufacturers={manufacturersList}
          selectedTypes={selectedTypes}
          selectType={toggleSelectedTypes}
          toggleManufacturers={toggleManufacturers}
          setMaxPrice={(num) => setPriceMax(num)}
          setMinPrice={(num) => setPriceMin(num)}
          resetManufacturers={resetManufacturers}
        />
        <ProductList products={products} />
      </FlexBox>
    </div>
  );
};

export default Catalog;
