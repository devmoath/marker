import 'tailwindcss/tailwind.css';
import NavBar from '@components/NavBar';
import SEO from '@components/SEO';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-white dark:bg-gray-700 pb-28 min-h-screen">
            <SEO />
            <NavBar />
            <div className="container mt-10">
                <Component {...pageProps} />
            </div>
        </div>
    );
}
