import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sistema de consulta de Pokémons</title>
        <meta name="description" content="Sistema para coletar informações sobre pokémons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
      <Image
        src="/Pokemon-Logo.png"
        alt="LogoPokemon"
        width={600}
        height={250}
      />

        <p className={styles.description}>
          Sistema de consulta de informações dos pokémons
        </p>
      
      <Link href="/home">Vamos lá!</Link>
      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por Edvaldo de Ramos Junior
        </a>
      </footer>
    </div>
  )
}
