import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AppRouter from "./components/AppRouter";
import Layout from "./components/Layout/Layout";

import productsData from "./data/products.json";
import { RootState } from "./store/store";

function App() {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(productsData));
  }

  return (
    <div className="App">
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
}

export default App;
