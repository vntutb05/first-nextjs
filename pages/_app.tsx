import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return(
    <div className="appRoot">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/admin/style.css"/>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
