import axios from "axios";
import React, { useState, useEffect } from "react";

const Store = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://glacial-eyrie-77569.herokuapp.com/recentprojects/?format=json"
    );
    setStoreItems(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>It's Working!</div>;
};

export default Store;
