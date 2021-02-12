import React from "react";

const StoreProductList = ({ isLoading, products }) => {
  return isLoading ? (
    <div className="storefront">Products did not load.</div>
  ) : (
    <div className="storefront">
      Products are here!
      {products.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default StoreProductList;
