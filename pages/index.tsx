import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Seth Hall: Code/Film</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces&display=swap" rel="stylesheet" />
      </Head>

      <Navigation />

      <main className="">
        <h1 className="text:2xl font-serif">Dark mode with Tailwind and Next-themes</h1>
      </main>

      <Footer />
    </div>
  )
}
