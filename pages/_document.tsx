import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Seth Hall Creative - Code:Film" />
          <meta name="keywords" content="Web Development" />
          <meta name="author" content="Seth Hall" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dosis:wght@700&family=Roboto+Slab:wght@300;400&display=swap"
            rel="stylesheet"
          />
          {/* Open Graph */}
          <meta
            property="og:url"
            content="https://www.sethhallcreative.com/"
            key="ogurl"
          />
          <meta property="og:image" content="/social-card.png" key="ogimage" />
          <meta
            property="og:site_name"
            content="Seth Hall Creative - Code:Film"
            key="ogsitename"
          />
          <meta
            property="og:title"
            content="Seth Hall Creative - Code:Film"
            key="ogtitle"
          />
          +{' '}
          <meta
            property="og:description"
            content="Frontend/Full Stack Web Developer. Creative Producer."
            key="ogdesc"
          />
          {/* Twitter */}
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta
            name="twitter:creator"
            content="@sethburtonhall"
            key="twhandle"
          />
        </Head>
        <body
          className={`bg-purple-900 text-white ${
            process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
          }`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
