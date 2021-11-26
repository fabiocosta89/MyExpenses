// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Font: Source Sans Pro */}
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body className="hold-transition sidebar-mini">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument