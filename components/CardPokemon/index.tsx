import React from 'react';
import { Container } from './styles';

const CardPokemon = () => {
    return (
        <Container>
            <img 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" 
            alt="Sample_Pokemon"
            className="img-pokemon"
            />
            <div className="container-id">
                <p className="id-pokemon">4</p>
            </div>
            <div className="container-tipo">
                <p className="tipo-pokemon">Fire</p>
            </div>
            <div className="rodape-nome">
            <div className="container-nome">
                <p className="nome-pokemon">Charmander</p>   
            </div>
            </div>
        </Container>
    );
}

export default CardPokemon;