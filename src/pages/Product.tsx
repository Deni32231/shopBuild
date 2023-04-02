import React from "react";
import { useParams } from "react-router-dom";
import NavigationPage from "../components/NavigationPage/NavigationPage";
import ProductBlock from "../components/ProductBlock/ProductBlock";
import { IProduct } from "../components/ProductCard/ProductCard";
import { useCurrentProduct } from "../hooks/useCurrentProduct";

const Product = () => {
  const product = useCurrentProduct();

  return (
    <div>
      <NavigationPage
        elements={["Главная", "Каталог", `${product.brand} ${product.name}`]}
      />
      <ProductBlock product={product} />
    </div>
  );
};

export default Product;
