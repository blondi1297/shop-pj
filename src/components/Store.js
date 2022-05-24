import React, { useContext } from "react";
//context
import { ProductsContext } from "../context/ProductsContextProvider";
//component
import Product from "./shared/Product";

const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
