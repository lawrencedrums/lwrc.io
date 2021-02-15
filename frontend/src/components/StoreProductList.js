import React from "react";
// import styled from "styled-components";
import SearchBar from "./SearchBar";

const StoreProductList = ({ isLoading, products }) => {
  return isLoading ? (
    <div className="storefront">Products did not load.</div>
  ) : (
    <div className="storefront">
      <SearchBar />
      {products.map((item) => (
        <span key={item.id}>
          <p>{item.title}</p>
          <p>Catagory: {item.catagory}</p>
        </span>
      ))}
    </div>
  );
};

export default StoreProductList;
