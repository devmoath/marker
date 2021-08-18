import 'tailwindcss/tailwind.css';
import NavBar from '@components/NavBar';
import SEO from '@components/SEO';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <SEO />
            <NavBar />
            <div className="pt-[4rem]">
                <Component {...pageProps} />
            </div>
        </div>
    );
}
