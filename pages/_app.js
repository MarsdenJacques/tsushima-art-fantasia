import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Tsushima Art Fantasia</title>
        <meta name="description" content="Tsushima Art Fantasia" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
