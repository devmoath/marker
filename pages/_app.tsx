import 'tailwindcss/tailwind.css';
import NavBar from '@components/NavBar';
import SEO from '@components/SEO';
import { AppProps } from 'next/app';
import { PreviewContext } from '@contexts/preview';
import { useState } from 'react';

// noinspection JSUnusedGlobalSymbols
export default function App({ Component, pageProps }: AppProps) {
    const [isPreviewMode, setPreviewMode] = useState(false);

    if (Component.displayName === 'ErrorPage') {
        return <Component {...pageProps} />;
    }

    return (
        <div className="bg-white antialiased dark:bg-gray-700" dir="rtl">
            <PreviewContext.Provider value={{ isPreviewMode, setPreviewMode }}>
                <SEO />
                <NavBar />
                <div className="h-screen">
                    <Component {...pageProps} />
                </div>
            </PreviewContext.Provider>
        </div>
    );
}
