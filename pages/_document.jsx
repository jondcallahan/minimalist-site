import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/main.css" />
          <script
            data-goatcounter="https://joncallahan.goatcounter.com/count"
            async
            src="/count.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `if (window.location.hash === '#skipgc') {localStorage.setItem('skipgc', 't')} window.goatcounter = {no_onload: localStorage.getItem('skipgc') === 't' || ('doNotTrack' in navigator && navigator.doNotTrack === '1')}`,
            }}
          />
          <script async src="https://cdn.panelbear.com/analytics.js?site=JdFbYCwwcsZ"></script>
          <script dangerouslySetInnerHTML={{__html: `
              window.panelbear = window.panelbear || function() { (window.panelbear.q = window.panelbear.q || []).push(arguments); };
              panelbear('config', { site: 'JdFbYCwwcsZ' });
          `}} />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
