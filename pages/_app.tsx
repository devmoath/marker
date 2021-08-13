import 'tailwindcss/tailwind.css';
import NavBar from '@components/NavBar';
import SEO from '@components/SEO';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <SEO />
            <NavBar />
            <div className="mx-3 my-5">
                <Component {...pageProps} />
            </div>
        </div>
    );
}