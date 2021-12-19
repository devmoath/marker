import 'tailwindcss/tailwind.css';
import NavBar from '@components/NavBar';
import SEO from '@components/SEO';
import {AppProps} from 'next/app';
import {PreviewContext} from '@contexts/preview';
import {useState} from 'react';
import PlausibleProvider from 'next-plausible';


export default function App({Component, pageProps}: AppProps) {
    const [isPreviewMode, setPreviewMode] = useState(false);

    return (
        <PlausibleProvider domain="marker.moath.dev">
            <div className="bg-white dark:bg-gray-700">
                <PreviewContext.Provider value={{isPreviewMode, setPreviewMode}}>
                    <SEO/>
                    <NavBar/>
                    <div className='pt-[4rem]'>
                        <Component {...pageProps} />
                    </div>
                </PreviewContext.Provider>
            </div>
        </PlausibleProvider>
    );
}
