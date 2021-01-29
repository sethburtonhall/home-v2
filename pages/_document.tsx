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
        </Head>
        <body
          className={`text-white ${
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
