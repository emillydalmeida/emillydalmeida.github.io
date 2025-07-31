import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import { LanguageProvider } from '../contexts/LanguageContext'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      disable: false,
    })
  }, [])

  return (
    <LanguageProvider>
      <ThemeProvider>
        <Head>
          <title>Emilly Almeida - Desenvolvedora Fullstack</title>
          <meta name="description" content="Desenvolvedora fullstack especializada em React, Next.js, Node.js e tecnologias modernas. Confira meu portfólio e projetos." />
          <meta name="keywords" content="desenvolvedor, fullstack, react, nextjs, nodejs, portfolio, emilly almeida" />
          <meta name="author" content="Emilly Almeida" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Emilly Almeida - Desenvolvedora Fullstack" />
          <meta property="og:description" content="Desenvolvedora fullstack com paixão por criar soluções eficientes e escaláveis." />
          <meta property="og:image" content="/images/emilly-almeida.jpeg" />
          <meta property="og:url" content="https://emillydalmeida.github.io" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-full min-h-screen">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}