import axios from "axios";
import React, { useState, useEffect } from "react";
import StoreProductList from "./StoreProductList";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const fetchData = async () => {
    const { data } = await axios.get("http://0.0.0.0:8000/storeproducts/");
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="store">
      <StoreProductList isLoading={isLoading} products={products} />
    </div>
  );
};

export default Store;
