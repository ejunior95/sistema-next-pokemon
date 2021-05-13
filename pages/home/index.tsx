import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
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
      
      <Image
        src="/Pokemon-Logo.png"
        alt="LogoPokemon"
        width={widthPadrao / 2}
        height={heightPadrao / 2}
        />

        <p>
          Sistema de consulta de informações dos pokémons
        </p>

        <CustomButton link="/detalhes" text="Vamos lá!" />
      
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
