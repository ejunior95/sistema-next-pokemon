import React from 'react';
import { Container } from './styles';
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return(
      <Container>
          <FaSearch className="icone-search" />
          <input type="text" placeholder="Procurar pokémons" />
      </Container>
  );
}

export default SearchBox;