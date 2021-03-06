import Head from 'next/head'
import { Container } from './styles'
import SearchBox from '../../components/SearchBox'
import CustomButton from '../../components/CustomButton'
import React from 'react'
import CardPokemon from '../../components/CardPokemon'
import { useState } from 'react'

export default function Detalhes() {

  const [pesquisa, setPesquisa] = useState('')

  function pesquisarPokemon() {
    
  }

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
