import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

export default class Document extends NextDocument {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await NextDocument.getInitialProps(ctx)

        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body className="bg-white dark:bg-gray-700">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
