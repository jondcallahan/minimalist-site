import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head />
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            body {
              background-color: #f5f7fa;
              color: #2e2e2e;
              font-family: Georgia;
            }
            p {
              line-height: 1.5;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
