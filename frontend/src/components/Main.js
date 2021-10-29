import React, { useEffect } from "react";
import { Catalog } from "./sections/Catalog";
import { TopSales } from "./TopSales";

export function Main() {
  return (
    <>
      <TopSales />
      <Catalog />
    </>
  );
}
