import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
    static async getInitialProps(ctx) {
        const initialProps = await NextDocument.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        const title = 'RTL Markdown Editor',
            url = 'https://rtl-markdown-editor.vercel.app',
            description = 'Markdown Editor for RTL languages';

        return (
            <Html dir="rtl" lang="en" style={{ scrollBehavior: 'smooth' }}>
                <Head>
                    <link href={url} hrefLang="ar" rel="alternate" />
                    <meta content={description} name="keywords" />
                    <meta content="moath.dev" name="author" />
                    <meta content="index, follow" name="robots" />
                    <meta charSet="utf-8" />
                    <meta content={title} property="og:site_name" />
                    <meta content={url} property="og:url" />
                    <meta content="ar-SA" property="og:locale" />
                    <meta content="website" property="og:type" />
                    <meta content="summary_large_image" name="twitter:card" />
                    <meta content={url} name="twitter:site" />
                    <meta content="@dev_moath" name="twitter:creator" />
                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                    <link rel="icon" type="image/png" href="/favicon.png" />
                    <meta name="title" content={title} />
                    <meta name="description" content={description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://rtl-markdown-editor.vercel.app/" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content="https://rtl-markdown-editor.vercel.app/favicon.svg" />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://rtl-markdown-editor.vercel.app/" />
                    <meta property="twitter:title" content={title} />
                    <meta property="twitter:description" content={description} />
                    <meta property="twitter:image" content="https://rtl-markdown-editor.vercel.app/favicon.svg" />
                    <meta content={title} itemProp="name" />
                    <meta name="apple-mobile-web-app-title" content={title} />
                    <meta name="application-name" content={title} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
