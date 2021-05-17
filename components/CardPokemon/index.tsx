import React from 'react';
import { Container } from './styles';

interface IProps {
    id?: number;
    name?: string;
    name_ability?: string; 
    front_default?: string;
}

const CardPokemon = (props:IProps) => {
   
   const {
    id = 0,
    name = '??????',
    name_ability = '??????', 
    front_default = 'https://img-premium.flaticon.com/png/512/25/25333.png?token=exp=1621210896~hmac=53a24a0fdd996c1876ce3f8f7ccaebd3'
   } = props;
   
    return (
        <Container>
            <img 
            src={front_default}
            alt="Sample_Pokemon"
            className="img-pokemon"
            />
            <div className="container-id">
                <p className="id-pokemon">{id}</p>
            </div>
            <div className="container-tipo">
                <p className="tipo-pokemon">{name_ability}</p>
            </div>
            <div className="rodape-nome">
            <div className="container-nome">
                <p className="nome-pokemon">{name}</p>   
            </div>
            </div>
        </Container>
    );
}

export default CardPokemon;