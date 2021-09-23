import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Styled from "styled-components";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import styled from "styled-components";

const Container = Styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;

  p {
    color: white;
  }
`;

const ContentWrapper = styled.div`
  width: 75vw;
`;

const ItemCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StoreItem = styled.div`
  width: 25vw;
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-color: #2a2a2a;

  img {
    width: 22vw;
    height: 22vw;
    object-fit: cover;
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

  const stripePromise = loadStripe(
    "pk_test_51IKuryF3m9OLgSX0uMv3hp56aXf0wrTH7OO8xubO0Z3wTSNmZEGeKtrRyMm8lVjt4Js41dG36Egrs5O4VZzqtKte00Yb8Il71G"
  );

  const handleClick = async (event) => {
    // Get item id by the key mapped to its quickbuy button
    const id = event.target.id;

    const stripe = await stripePromise;
    const response = await axios.post(
      "http://0.0.0.0:8000/create-checkout-session/",
      {
        id: id,
      }
    );

    const session = await response.data;

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return isLoading ? (
    <Container>Products did not load.</Container>
  ) : (
    <Container>
      <ContentWrapper>
        <SearchBar
          setPlaceholder="Periphery, Veil of Maya, Erra..."
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ItemCards>
          {filtedItems.map((item) => (
            <StoreItem>
              <img alt={item.title} src={item.image_url} />
              <p>
                {item.title} : ${item.price}
              </p>
              <button
                type="button"
                id={item.id}
                role="link"
                onClick={handleClick}
              >
                Quick buy
              </button>
            </StoreItem>
          ))}
        </ItemCards>
      </ContentWrapper>
    </Container>
  );
};

export default StoreProductList;
