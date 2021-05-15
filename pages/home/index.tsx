import React from 'react'
import Head from 'next/head'
import CustomButton from '../../components/CustomButton'
import { Container } from './styles'
 
export default function Home() {
  
  let widthPadrao  
  let heightPadrao

  if (typeof window !== "undefined") {
    widthPadrao = window.innerWidth
    heightPadrao = window.innerHeight  
  }

  return (
    <Container>

    <Head>
        <title>Sistema de consulta de Pokémons</title>
        <meta name="description" content="Sistema para coletar informações sobre pokémons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <img src="/Pokemon-Logo.png" alt="LogoPokemon" className="logo-pokemon" />

        <p>
          Sistema de consulta de informações dos pokémons
        </p>

        <CustomButton text="Vamos lá!" link="/detalhes" widthButton="160px" heightButton="50px" />
      
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
