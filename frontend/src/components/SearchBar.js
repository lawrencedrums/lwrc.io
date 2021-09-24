import React from "react";
import styled from "styled-components";

const StyledSearchBar = styled.div`
  padding: 2rem;

  input {
    width: 300px;
    height: 30px;
    border-radius: 5px;
  }
`;

const SearchBar = ({ setPlaceholder, searchQuery, setSearchQuery }) => {
  return (
    <StyledSearchBar>
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="searchBar"
        placeholder={setPlaceholder}
        name="s"
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
