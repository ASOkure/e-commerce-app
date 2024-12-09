import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";
import { ProductsList } from "../pages/Products/ProductsList";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </>
  );
};
