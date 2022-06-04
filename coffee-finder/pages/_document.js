import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <link 
                        rel="preload"
                         href="/fonts/Roboto-Regular.ttf"
                         as="font"
                         crossOrigin="anonymous"></link>
                    <link 
                        rel="preload"
                         href="/fonts/Roboto-Bold.ttf"
                         as="font"
                         crossOrigin="anonymous"></link>
                    <link 
                        rel="preload"
                         href="/fonts/Roboto-Italic.ttf"
                         as="font"
                         crossOrigin="anonymous"></link>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}

export default MyDocument;