import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <div dir="rtl">
            <Head>
                <title>RTL Markdown Editor</title>
                <link href="https://rtl-markdown-editor.vercel.app" hrefLang="ar" rel="alternate" />
                <meta content="markdown editor for rtl language" name="keywords" />
                <meta content="moath.dev" name="author" />
                <meta content="index, follow" name="robots" />
                <meta charSet="utf-8" />
                <meta content="RTL Markdown Editor" property="og:site_name" />
                <meta content="https://rtl-markdown-editor.vercel.app" property="og:url" />
                <meta content="ar-SA" property="og:locale" />
                <meta content="website" property="og:type" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="https://rtl-markdown-editor.vercel.app" name="twitter:site" />
                <meta content="@dev_moath" name="twitter:creator" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <meta name="title" content="RTL Markdown Editor" />
                <meta name="description" content="markdown editor for rtl language" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://rtl-markdown-editor.vercel.app/" />
                <meta property="og:title" content="RTL Markdown Editor" />
                <meta property="og:description" content="markdown editor for rtl language" />
                <meta property="og:image" content="https://rtl-markdown-editor.vercel.app/favicon.svg" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://rtl-markdown-editor.vercel.app/" />
                <meta property="twitter:title" content="RTL Markdown Editor" />
                <meta property="twitter:description" content="markdown editor for rtl language" />
                <meta property="twitter:image" content="https://rtl-markdown-editor.vercel.app/favicon.svg" />
                <meta content="RTL Markdown Editor" itemProp="name" />
                <meta content="width=device-width, initial-scale=1.0, viewport-fit=cover" name="viewport" />
                <meta name="apple-mobile-web-app-title" content="RTL Markdown Editor" />
                <meta name="application-name" content="RTL Markdown Editor" />
            </Head>
            <div className="navbar shadow-lg bg-base-200">
                <div className="flex-1">
                    <Link href="/">
                        <a href="/" className="btn btn-ghost">
                            <span className="text-lg font-bold">RTL Markdown Editor</span>
                        </a>
                    </Link>
                </div>
                <div className="flex-none">
                    <a href="https://twitter.com/Dev_Moath" className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-blue-500"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                    </a>
                    <a href="https://github.com/DevMoath/rtl-markdown-editor.git" className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-base-content"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="mx-3 my-5">
                <Component {...pageProps} />
            </div>
        </div>
    );
}
