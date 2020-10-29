import Head from 'next/head';

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,height=device-height,initial-scale=1,minimum-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
