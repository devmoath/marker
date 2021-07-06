import 'tailwindcss/tailwind.css';
import NavBar from '@components/NavBar';

export default function App({ Component, pageProps }) {
    return (
        <div>
            <NavBar />
            <div className="mx-3 my-5">
                <Component {...pageProps} />
            </div>
        </div>
    );
}
