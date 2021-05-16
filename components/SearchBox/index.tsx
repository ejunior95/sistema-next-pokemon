import React from 'react';
import { Container } from './styles';
import { FaSearch } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const SearchBox = () => {
  return(
      <Container>
          <FaSearch className="icone-search" />
          <input type="text" placeholder="Procurar pokémons" />
          <AiFillCaretDown className="icone-search-expand" title="Visualizar filtros" />
      </Container>
  );
}

export default SearchBox;