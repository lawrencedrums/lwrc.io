import React from "react";
import styled from "styled-components";

const StyledSearchBar = styled.div`
  padding: 50px;

  input {
    width: 300px;
    height: 30px;
    border-radius: 5px;
  }
`;

const SearchBar = ({ setPlaceholder, searchTerm, setSearchTerm }) => {
  return (
    <StyledSearchBar>
      <input type="text" id="searchBar" placeholder={setPlaceholder} name="s" />
    </StyledSearchBar>
  );
};

export default SearchBar;
