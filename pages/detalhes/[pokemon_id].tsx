import Head from 'next/head'
import { Container } from './styles'
import SearchBox from '../../components/SearchBox'
import CustomButton from '../../components/CustomButton'
import React from 'react'
import CardPokemon from '../../components/CardPokemon'
import { useState } from 'react'
import { GetStaticProps } from 'next'
import api from '../api'

interface IProps {
  pokemon: {
    id?: number;
    name?: string;
    name_ability?: string; 
    front_default?: string;
  }
}

export default function DetalhesPesquisa(props:IProps) {

  const [pesquisa, setPesquisa] = useState('')
  return (
    <Container>
      <Head>
        <title>Sistema de consulta de Pokémons</title>
        <meta name="description" content="Sistema para coletar informações sobre pokémons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
      <img src="/Pokemon-Logo.png" alt="Logo_Pokemon" className="logo-pokemon" />
        <SearchBox value={pesquisa} onChange={setPesquisa} />
        <CustomButton text="Procurar" link={`/detalhes/${pesquisa}`} widthButton="150px" heightButton="40px" />
      </nav>

      <main>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
      </main>

      <footer>
      <a
          href="https://github.com/ejunior95"
          target="_blank"
          rel="noopener noreferrer"
          >
          Desenvolvido por Edvaldo de Ramos Junior
        </a>
      </footer>

    </Container>
    
  )

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pokemon_id } = params;
  const response = await api.get(`/pokemon/${pokemon_id}`)

  const pokemon = {
    id: response.data.id,
    name: response.data.name,
    name_ability: response.data, 
    front_default: response.data
  }

  return {
    props: {
      pokemon: response.data,
    },
    revalidade: 60 * 30, // 30 minutes
  };
};
