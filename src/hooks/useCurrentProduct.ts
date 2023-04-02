import { useParams } from "react-router-dom";
import { IProduct } from "../components/ProductCard/ProductCard";

export const useCurrentProduct = () => {
  const params = useParams();

  const products: IProduct[] = JSON.parse(
    localStorage.getItem("products") || ""
  );

  const currentIndex = products.findIndex(
    (product) => product.barcode === Number(params.id)
  );

  return products[currentIndex];
};
