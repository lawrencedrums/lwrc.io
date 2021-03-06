import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Styled from "styled-components";

const Container = Styled.div`
  width: 100vw;

  p {
    color: white;
  }
`;

const filterItems = (items, query) => {
  // Filter tilte of items fetched from API base on query input
  if (!query) {
    return items;
  }
  return items.filter((item) => {
    const itemTitle = item.title.toLowerCase();
    return itemTitle.includes(query.toLowerCase());
  });
};

const StoreProductList = ({ isLoading, products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filtedItems = filterItems(products, searchQuery);

  return isLoading ? (
    <Container>Products did not load.</Container>
  ) : (
    <Container>
      <SearchBar
        setPlaceholder="Periphery, Veil of Maya, Erra..."
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {filtedItems.map((item) => (
        <span key={item.id}>
          <p>{item.title}</p>
        </span>
      ))}
    </Container>
  );
};

export default StoreProductList;
