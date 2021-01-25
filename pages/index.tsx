import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Code/Film</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="">
        <h1 className="text:2xl">Dark mode with Tailwind and Next-themes</h1>
      </main>

      <Footer />
    </div>
  )
}
