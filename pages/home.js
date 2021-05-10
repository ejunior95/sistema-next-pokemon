import Head from 'next/head'
import Image from 'next/image'
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
        <h1 className={styles.title}>Tela inicial</h1>
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
