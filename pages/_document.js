// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Global } from '@emotion/core'
import globalStyles from '../styles/global'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {/* <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#00bebe" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="stylesheet" href="/static/styles.css" /> */}
        </Head>
        <body>
          <Global styles={globalStyles} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument