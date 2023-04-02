import React from "react";
import AdminPanel from "../pages/AdminPanel";
import Basket from "../pages/Basket";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  ADMIN_PANEL = "/admin",
  BASKET = "/basket",
  CATALOG = "/catalog",
  PRODUCT_ID = "/product/:id",
}

export const routes: IRoute[] = [
  { path: RouteNames.ADMIN_PANEL, element: AdminPanel },
  { path: RouteNames.BASKET, element: Basket },
  { path: RouteNames.CATALOG, element: Catalog },
  { path: RouteNames.PRODUCT_ID, element: Product },
];
