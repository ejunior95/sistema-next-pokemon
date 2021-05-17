import React from 'react';
import { Container } from './styles';
import { FaSearch } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

interface IProps {
  onChange: (e:string) => void;
  value: string;
}

const SearchBox = (props: IProps) => {
  
  const {
    onChange,
    value
  } = props;
  
  return(
      <Container>
          <FaSearch 
          className="icone-search" 
          />
          <input 
          type="text" 
          placeholder="Procurar pokémons pelo id, nome ou tipo de habilidade..." 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          />
          <AiFillCaretDown className="icone-search-expand" title="Visualizar filtros" />
      </Container>
  );
}

export default SearchBox;