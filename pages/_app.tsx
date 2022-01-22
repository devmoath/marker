import 'tailwindcss/tailwind.css';
import NavBar from '@components/NavBar';
import SEO from '@components/SEO';
import { AppProps } from 'next/app';
import { PreviewContext } from '@contexts/preview';
import { useState } from 'react';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
    const [isPreviewMode, setPreviewMode] = useState(false);

    return (
        <div className="bg-white dark:bg-gray-700">
            <Script defer data-domain="marker.moath.dev" src="/js/script.js" />
            <PreviewContext.Provider value={{ isPreviewMode, setPreviewMode }}>
                <SEO />
                <NavBar />
                <div className="pt-[4rem]">
                    <Component {...pageProps} />
                </div>
            </PreviewContext.Provider>
        </div>
    );
}
