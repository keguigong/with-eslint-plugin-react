// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js

/** @jsx jsx */
import { jsx } from 'theme-ui'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Global from '../styles/global'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <body>
          <Global />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument