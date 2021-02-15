import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const filterItems = (items, query) => {
  // Filter tilte of items fetched from API base on query input
  if (!query) {
    return items;
  }
  return items.filter((item) => {
    const itemTitle = item.title.toLowerCase();
    return itemTitle.includes(query);
  });
};

const StoreProductList = ({ isLoading, products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filtedItems = filterItems(products, searchQuery);

  return isLoading ? (
    <div className="storefront">Products did not load.</div>
  ) : (
    <div className="storefront">
      <SearchBar
        setPlaceholder="Periphery, Veil of Maya, Erra..."
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {filtedItems.map((item) => (
        <span key={item.id}>
          <p>{item.title}</p>
          <p>Catagory: {item.catagory}</p>
        </span>
      ))}
    </div>
  );
};

export default StoreProductList;
